import Link from "next/link";
import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from "react";
import { cn } from "@/lib/utils";

type Variant = "primary" | "secondary";

const baseStyles =
  "inline-flex min-h-11 items-center justify-center gap-2 rounded-full px-[22px] py-3 text-[15px] font-medium " +
  "transition-transform duration-200 ease-out hover:scale-[1.02] active:scale-[0.98] " +
  "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent";

const variantStyles: Record<Variant, string> = {
  primary: "bg-black text-white hover:bg-gray-900",
  secondary: "bg-transparent text-text-primary border border-gray-200 hover:border-gray-400",
};

type CommonProps = {
  variant?: Variant;
  className?: string;
  children: ReactNode;
};

type ButtonAsButton = CommonProps &
  Omit<ButtonHTMLAttributes<HTMLButtonElement>, keyof CommonProps> & {
    href?: undefined;
  };

type ButtonAsLink = CommonProps &
  Omit<AnchorHTMLAttributes<HTMLAnchorElement>, keyof CommonProps> & {
    href: string;
  };

type ButtonProps = ButtonAsButton | ButtonAsLink;

export function Button({ variant = "primary", className, children, ...props }: ButtonProps) {
  const classes = cn(baseStyles, variantStyles[variant], className);

  if ("href" in props && props.href) {
    const { href, ...anchorProps } = props;
    return (
      <Link href={href} className={classes} {...anchorProps}>
        {children}
      </Link>
    );
  }

  return (
    <button className={classes} {...(props as ButtonHTMLAttributes<HTMLButtonElement>)}>
      {children}
    </button>
  );
}
