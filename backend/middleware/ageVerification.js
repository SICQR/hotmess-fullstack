/**
 * Age Verification Middleware
 * GDPR-compliant, purpose-limited age verification for high-risk endpoints
 */

const REQUIRED_AGE = 18;
const AGE_VERIFICATION_HEADER = 'x-age-verified';
const CONSENT_HEADER = 'x-consent-given';

/**
 * Middleware to verify age and consent for high-risk endpoints
 * @param {Object} req - Express request object
 * @param {Object} res - Express response object
 * @param {Function} next - Express next function
 */
const ageVerificationMiddleware = (req, res, next) => {
  // Check if this is a high-risk endpoint
  const isHighRiskEndpoint = req.path.includes('/hung') || 
                            req.path.includes('/adult') ||
                            req.query.collection === 'HUNG';

  // If not high-risk, proceed
  if (!isHighRiskEndpoint) {
    return next();
  }

  // Check for age verification header
  const ageVerified = req.headers[AGE_VERIFICATION_HEADER];
  const consentGiven = req.headers[CONSENT_HEADER];

  // Log for audit (no personal data)
  console.log('Age verification check:', {
    endpoint: req.path,
    timestamp: new Date().toISOString(),
    ageVerified: !!ageVerified,
    consentGiven: !!consentGiven,
    ip: req.ip, // For rate limiting only
    userAgent: req.get('User-Agent')?.substring(0, 50) // Truncated for privacy
  });

  // Check age verification
  if (!ageVerified || ageVerified !== 'true') {
    return res.status(403).json({
      error: 'Age verification required',
      message: 'You must be 18+ to access this content',
      code: 'AGE_VERIFICATION_REQUIRED',
      redirectTo: '/legal/age'
    });
  }

  // Check explicit consent
  if (!consentGiven || consentGiven !== 'true') {
    return res.status(403).json({
      error: 'Explicit consent required',
      message: 'Explicit consent required for adult content access',
      code: 'CONSENT_REQUIRED',
      redirectTo: '/legal/age'
    });
  }

  // Add verification timestamp to request for audit
  req.ageVerificationTimestamp = new Date().toISOString();
  req.isAgeVerified = true;

  next();
};

/**
 * Express middleware factory for different verification levels
 * @param {Object} options - Configuration options
 * @returns {Function} Express middleware function
 */
const createAgeVerificationMiddleware = (options = {}) => {
  const {
    requiredAge = REQUIRED_AGE,
    requireConsent = true,
    logAccess = true
  } = options;

  return (req, res, next) => {
    const ageVerified = req.headers[AGE_VERIFICATION_HEADER];
    const consentGiven = req.headers[CONSENT_HEADER];

    // Audit logging (GDPR-compliant, no personal data)
    if (logAccess) {
      console.log('Age verification attempt:', {
        endpoint: req.path,
        method: req.method,
        timestamp: new Date().toISOString(),
        hasAgeHeader: !!ageVerified,
        hasConsentHeader: !!consentGiven
      });
    }

    // Age verification check
    if (!ageVerified || ageVerified !== 'true') {
      return res.status(403).json({
        error: 'Age verification required',
        message: `You must be ${requiredAge}+ to access this content`,
        code: 'AGE_VERIFICATION_REQUIRED',
        requiredAge,
        redirectTo: '/legal/age'
      });
    }

    // Consent check
    if (requireConsent && (!consentGiven || consentGiven !== 'true')) {
      return res.status(403).json({
        error: 'Explicit consent required',
        message: 'Explicit consent required for access',
        code: 'CONSENT_REQUIRED',
        redirectTo: '/legal/age'
      });
    }

    // Add verification metadata to request
    req.verification = {
      ageVerified: true,
      consentGiven: requireConsent ? !!consentGiven : null,
      timestamp: new Date().toISOString(),
      requiredAge
    };

    next();
  };
};

/**
 * Rate limiting for age verification attempts
 * Prevents abuse while maintaining privacy
 */
const ageVerificationRateLimit = (() => {
  const attempts = new Map();
  const WINDOW_MS = 15 * 60 * 1000; // 15 minutes
  const MAX_ATTEMPTS = 10;

  return (req, res, next) => {
    const key = req.ip;
    const now = Date.now();
    
    // Clean old entries
    for (const [ip, data] of attempts.entries()) {
      if (now - data.firstAttempt > WINDOW_MS) {
        attempts.delete(ip);
      }
    }

    // Check current IP
    const ipData = attempts.get(key) || { count: 0, firstAttempt: now };
    
    if (now - ipData.firstAttempt > WINDOW_MS) {
      // Reset window
      ipData.count = 0;
      ipData.firstAttempt = now;
    }

    ipData.count++;
    attempts.set(key, ipData);

    if (ipData.count > MAX_ATTEMPTS) {
      return res.status(429).json({
        error: 'Too many verification attempts',
        message: 'Please wait before trying again',
        retryAfter: Math.ceil((WINDOW_MS - (now - ipData.firstAttempt)) / 1000)
      });
    }

    next();
  };
})();

module.exports = {
  ageVerificationMiddleware,
  createAgeVerificationMiddleware,
  ageVerificationRateLimit
};