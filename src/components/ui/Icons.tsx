interface IconProps {
  className?: string;
}

export function HelmetIcon({ className = 'w-8 h-8' }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M8 28C8 17.5 14.5 10 24 10C33.5 10 40 17.5 40 28" stroke="currentColor" strokeWidth="3" strokeLinecap="round"/>
      <path d="M6 30C6 30 6 34 10 36C14 38 34 38 38 36C42 34 42 30 42 30" stroke="currentColor" strokeWidth="3" strokeLinecap="round"/>
      <path d="M14 28C14 21.5 18.5 16 24 16C29.5 16 34 21.5 34 28" stroke="currentColor" strokeWidth="2" strokeLinecap="round" opacity="0.4"/>
      <circle cx="24" cy="12" r="2" fill="currentColor" opacity="0.6"/>
    </svg>
  );
}

export function SaddleIcon({ className = 'w-8 h-8' }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M10 32C10 32 14 20 24 18C34 20 38 32 38 32" stroke="currentColor" strokeWidth="3" strokeLinecap="round"/>
      <path d="M8 34C8 34 10 30 16 30C20 30 22 32 24 32C26 32 28 30 32 30C38 30 40 34 40 34" stroke="currentColor" strokeWidth="3" strokeLinecap="round"/>
      <path d="M12 26L10 22" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/>
      <path d="M36 26L38 22" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/>
      <ellipse cx="24" cy="22" rx="6" ry="3" stroke="currentColor" strokeWidth="2" opacity="0.4"/>
    </svg>
  );
}

export function VestIcon({ className = 'w-8 h-8' }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M16 10L12 14L10 38H18L20 16L24 14L28 16L30 38H38L36 14L32 10" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M16 10C16 10 20 8 24 8C28 8 32 10 32 10" stroke="currentColor" strokeWidth="3" strokeLinecap="round"/>
      <line x1="14" y1="22" x2="18" y2="22" stroke="currentColor" strokeWidth="2" strokeLinecap="round" opacity="0.4"/>
      <line x1="14" y1="28" x2="18" y2="28" stroke="currentColor" strokeWidth="2" strokeLinecap="round" opacity="0.4"/>
      <line x1="30" y1="22" x2="34" y2="22" stroke="currentColor" strokeWidth="2" strokeLinecap="round" opacity="0.4"/>
      <line x1="30" y1="28" x2="34" y2="28" stroke="currentColor" strokeWidth="2" strokeLinecap="round" opacity="0.4"/>
    </svg>
  );
}

export function BootIcon({ className = 'w-8 h-8' }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M18 8L16 30L14 34L10 36L10 40H36L36 36L32 34L30 30L28 8" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
      <line x1="18" y1="14" x2="28" y2="14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" opacity="0.4"/>
      <line x1="17" y1="20" x2="29" y2="20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" opacity="0.4"/>
      <path d="M10 40H36" stroke="currentColor" strokeWidth="3" strokeLinecap="round"/>
    </svg>
  );
}

export function HorseIcon({ className = 'w-8 h-8' }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M14 40L16 28L20 24" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M34 40L32 28L28 24" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M12 24C12 24 14 16 20 14C24 12 32 12 36 16L38 12L40 10" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M20 24C20 24 24 26 28 24" stroke="currentColor" strokeWidth="3" strokeLinecap="round"/>
      <circle cx="36" cy="14" r="1.5" fill="currentColor"/>
      <path d="M40 10L42 8" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/>
      <path d="M40 10L42 12" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/>
    </svg>
  );
}

export function TargetIcon({ className = 'w-8 h-8' }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="24" cy="24" r="16" stroke="currentColor" strokeWidth="2.5"/>
      <circle cx="24" cy="24" r="10" stroke="currentColor" strokeWidth="2.5" opacity="0.6"/>
      <circle cx="24" cy="24" r="4" fill="currentColor"/>
    </svg>
  );
}

export function RulerIcon({ className = 'w-8 h-8' }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="8" y="16" width="32" height="16" rx="2" stroke="currentColor" strokeWidth="2.5"/>
      <line x1="14" y1="16" x2="14" y2="24" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
      <line x1="20" y1="16" x2="20" y2="22" stroke="currentColor" strokeWidth="2" strokeLinecap="round" opacity="0.5"/>
      <line x1="26" y1="16" x2="26" y2="24" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
      <line x1="32" y1="16" x2="32" y2="22" stroke="currentColor" strokeWidth="2" strokeLinecap="round" opacity="0.5"/>
    </svg>
  );
}

export function CartIcon({ className = 'w-8 h-8' }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M8 10H12L18 32H36L40 16H16" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
      <circle cx="20" cy="38" r="3" fill="currentColor"/>
      <circle cx="34" cy="38" r="3" fill="currentColor"/>
    </svg>
  );
}

export function StarIcon({ className = 'w-4 h-4', filled = true }: IconProps & { filled?: boolean }) {
  return (
    <svg className={className} viewBox="0 0 20 20" fill={filled ? 'currentColor' : 'none'} stroke="currentColor" strokeWidth="1.5">
      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.957a1 1 0 00.95.69h4.162c.969 0 1.371 1.24.588 1.81l-3.37 2.448a1 1 0 00-.364 1.118l1.287 3.957c.3.921-.755 1.688-1.54 1.118l-3.37-2.448a1 1 0 00-1.176 0l-3.37 2.448c-.784.57-1.838-.197-1.539-1.118l1.287-3.957a1 1 0 00-.364-1.118L2.07 9.384c-.783-.57-.38-1.81.588-1.81h4.162a1 1 0 00.95-.69l1.28-3.957z"/>
    </svg>
  );
}

export function CheckIcon({ className = 'w-5 h-5' }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 20 20" fill="currentColor">
      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
    </svg>
  );
}

export function ArrowRightIcon({ className = 'w-5 h-5' }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 20 20" fill="currentColor">
      <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"/>
    </svg>
  );
}
