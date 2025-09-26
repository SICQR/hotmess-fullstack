"use client";
import Link from 'next/link';

interface AftercareDisclaimerProps {
  variant?: 'default' | 'prominent';
  className?: string;
}

export default function AftercareDisclaimer({ 
  variant = 'default', 
  className = '' 
}: AftercareDisclaimerProps) {
  const baseStyles = "rounded-2xl border border-line p-4 text-sm";
  const variantStyles = variant === 'prominent' 
    ? "bg-yellow-500/10 border-yellow-500/30" 
    : "bg-white/5";

  return (
    <div 
      className={`${baseStyles} ${variantStyles} ${className}`} 
      role="alert"
      aria-label="Aftercare disclaimer"
    >
      <strong>Aftercare = Information & Services</strong> — Not medical advice. 
      HNH MESS funds real aftercare resources.{' '}
      <Link 
        href="/care" 
        className="underline hover:text-accent"
        aria-label="Visit our aftercare hub for support resources"
      >
        Visit our aftercare hub
      </Link>
    </div>
  );
}