interface BadgeProps {
  children: React.ReactNode;
  variant?: "default" | "blue" | "green";
  className?: string;
}

export function Badge({ children, variant = "default", className = "" }: BadgeProps) {
  const variants = {
    default: "bg-zinc-800 text-zinc-300 border border-zinc-700",
    blue: "bg-blue-500/10 text-blue-400 border border-blue-500/20",
    green: "bg-emerald-500/10 text-emerald-400 border border-emerald-500/20",
  };

  return (
    <span
      className={`inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-medium ${variants[variant]} ${className}`}
    >
      {children}
    </span>
  );
}
