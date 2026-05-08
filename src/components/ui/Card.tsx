import { cn } from "@/lib/utils";

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

export function Card({ children, className, ...props }: CardProps) {
  return (
    <div
      className={cn(
        "rounded-2xl border border-border bg-card p-8 transition-all hover:border-primary/20 hover:shadow-2xl hover:shadow-primary/5",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}
