# HOTMESS London - Deployment & QA Checklist

## Pre-Deployment Checklist

### ✅ Code Quality & Build
- [ ] All TypeScript/JavaScript code passes linting (`npm run build`)
- [ ] No console errors or warnings in production build
- [ ] All tests pass (if applicable)
- [ ] Build artifacts are optimized and minified
- [ ] Source maps are properly configured for debugging

### ✅ Security & Compliance
- [ ] Age verification gates work on all HUNG collection pages
- [ ] Consent headers properly validated on high-risk endpoints
- [ ] HTTPS enforced on all production URLs
- [ ] Environment variables contain no sensitive data in client-side code
- [ ] Rate limiting implemented on age verification endpoints
- [ ] CORS properly configured for production domains
- [ ] Helmet security headers configured

### ✅ GDPR Compliance
- [ ] Cookie banner displays on first visit
- [ ] Privacy policy accessible and up-to-date
- [ ] Data processing purposes clearly defined and limited
- [ ] User can request data export/deletion
- [ ] Consent is opt-in only, not opt-out
- [ ] No personal data stored without explicit consent
- [ ] Data retention policies documented

### ✅ Database & Backend
- [ ] MongoDB connection string uses production credentials
- [ ] Database indexes created for performance
- [ ] Product seed data populated
- [ ] Age verification middleware tests pass
- [ ] API endpoints return proper error codes
- [ ] Sensitive operations require proper authentication
- [ ] Backup and recovery procedures tested

### ✅ Frontend Pages & Navigation
- [ ] All core pages accessible: Home, Shop, Care, Community, Moderation, Legal
- [ ] Shop HUNG page requires age verification
- [ ] Aftercare disclaimer auto-appears on Care and HUNG pages
- [ ] Cross-links between sections work (no dead ends)
- [ ] 404 pages properly handled
- [ ] Page titles and meta descriptions optimized for SEO

### ✅ Accessibility (WCAG 2.1 AA)
- [ ] High contrast mode available or colors meet contrast requirements
- [ ] All images have descriptive alt text
- [ ] Keyboard navigation works on all interactive elements
- [ ] Screen reader compatibility tested
- [ ] Focus indicators visible and logical
- [ ] Headings properly structured (h1, h2, h3 hierarchy)
- [ ] Form labels properly associated
- [ ] ARIA attributes used where needed

### ✅ Audience Fit (Men-only, 18+)
- [ ] All content reviewed for masculine-focused language
- [ ] Age restrictions clearly communicated
- [ ] "Men-only" messaging consistent across all pages
- [ ] Aftercare resources appropriate for target audience
- [ ] Community guidelines reflect men-only policy
- [ ] No generic/corporate language used

### ✅ Performance
- [ ] Page load times under 3 seconds on 3G
- [ ] Images optimized and properly sized
- [ ] Critical CSS inlined
- [ ] JavaScript bundles optimized
- [ ] CDN configured for static assets
- [ ] Lazy loading implemented where appropriate

### ✅ Monitoring & Analytics
- [ ] Error tracking configured (no personal data captured)
- [ ] Performance monitoring active
- [ ] Uptime monitoring configured
- [ ] Analytics configured with privacy compliance
- [ ] Age verification attempts logged (anonymously)

## Production Deployment Steps

### 1. Environment Setup
```bash
# Set production environment variables
export NODE_ENV=production
export MONGODB_URI="mongodb://prod-server:27017/hotmess"
export FRONTEND_URL="https://hotmess.london"
export BACKEND_PORT=8080
```

### 2. Database Setup
```bash
# Seed production database
node backend/scripts/seedProducts.js
```

### 3. Build & Deploy
```bash
# Build optimized frontend
npm run build

# Start backend server
npm run backend

# Start frontend (production)
npm start
```

### 4. Health Checks
- [ ] Frontend loads at production URL
- [ ] Backend health endpoint responds: `/health`
- [ ] Age verification works on `/shop/hung`
- [ ] Database connection successful
- [ ] All critical user journeys tested

## Post-Deployment Verification

### ✅ Critical User Journeys
- [ ] **Adult User Journey**: Age gate → Shop HUNG → Add to cart
- [ ] **General User Journey**: Home → Shop (non-HUNG) → Community
- [ ] **Support Journey**: Home → Care → Aftercare resources
- [ ] **Moderation Journey**: Report issue → Confirmation
- [ ] **Legal Journey**: Privacy policy → Cookie settings

### ✅ Cross-Browser Testing
- [ ] Chrome (latest)
- [ ] Firefox (latest)  
- [ ] Safari (latest)
- [ ] Edge (latest)
- [ ] Mobile browsers (iOS Safari, Android Chrome)

### ✅ Device Testing
- [ ] Desktop (1920x1080 and 1366x768)
- [ ] Tablet (iPad, Android tablet)
- [ ] Mobile (iPhone, Android phone)
- [ ] Keyboard-only navigation
- [ ] Screen reader testing

### ✅ Load Testing
- [ ] Age verification endpoint under load
- [ ] Product API performance
- [ ] Database query performance
- [ ] Concurrent user handling

## Rollback Plan

### If Issues Detected:
1. **Immediate**: Revert to previous stable version
2. **Database**: Restore from latest backup if needed
3. **DNS**: Point traffic back to previous deployment
4. **Communication**: Notify users via social media if needed

### Rollback Commands:
```bash
# Stop current services
pkill -f "node backend"
pkill -f "next"

# Deploy previous version
git checkout previous-stable-tag
npm run build
npm start &
npm run backend &
```

## Live Operations Monitoring

### ✅ Daily Checks
- [ ] Age verification success rate > 95%
- [ ] No 5xx errors in logs
- [ ] Database connection healthy
- [ ] SSL certificates valid

### ✅ Weekly Reviews
- [ ] Performance metrics review
- [ ] User feedback review
- [ ] Security log audit
- [ ] GDPR compliance review

### ✅ Emergency Contacts
- **Technical Issues**: [technical@hotmess.london]
- **GDPR/Privacy**: [privacy@hotmess.london]  
- **Content/Moderation**: [moderation@hotmess.london]

---

## Compliance Sign-off

**Accessibility Compliance**: ✅ WCAG 2.1 AA verified  
**GDPR Compliance**: ✅ Data processing audited  
**Age Verification**: ✅ 18+ gates tested  
**Audience Fit**: ✅ Men-only, bold messaging verified  

**Deployment Approved By**: _______________  
**Date**: _______________  
**Version**: _______________  

---

*This checklist should be completed for every production deployment. Keep a record of each deployment with dates and any issues encountered.*