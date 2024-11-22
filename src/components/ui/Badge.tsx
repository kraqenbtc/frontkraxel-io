import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const badgeVariants = cva(
  "inline-flex items-center rounded-md px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
  {
    variants: {
      variant: {
        default: "bg-primary/80 text-primary-foreground hover:bg-primary/60",
        secondary: "bg-secondary/80 text-secondary-foreground hover:bg-secondary/60",
        success: "bg-accent-success/80 text-white hover:bg-accent-success/60",
        warning: "bg-accent-warning/80 text-white hover:bg-accent-warning/60",
        error: "bg-accent-error/80 text-white hover:bg-accent-error/60",
        outline: "text-foreground",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

const Badge = ({ className, variant, ...props }: BadgeProps) => {
  return <div className={cn(badgeVariants({ variant }), className)} {...props} />;
};

export { Badge, badgeVariants }; 