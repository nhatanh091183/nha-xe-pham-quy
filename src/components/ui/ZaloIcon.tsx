// SVG icon theo đúng logo Zalo
interface ZaloIconProps {
  size?: number;
  className?: string;
}

export function ZaloIcon({ size = 20, className = "" }: ZaloIconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 50 50"
      fill="currentColor"
      className={className}
      aria-label="Zalo"
    >
      <path d="M25 2C12.3 2 2 12.3 2 25s10.3 23 23 23 23-10.3 23-23S37.7 2 25 2zm11 30.2H14.1l-.1-2 14.3-17.3H14V10h22l.1 2L21.8 29.2H36v3z" />
    </svg>
  );
}
