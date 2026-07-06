import Link from "next/link";
import type { ReactNode } from "react";
import { ArrowRight } from "lucide-react";

type Variant = "primary" | "secondary" | "ghost" | "whatsapp";

type CommonProps = {
  children: ReactNode;
  variant?: Variant;
  className?: string;
  icon?: ReactNode;
  showArrow?: boolean;
};

type ButtonAsLink = CommonProps & {
  href: string;
  external?: boolean;
  onClick?: never;
};

type ButtonAsButton = CommonProps & {
  href?: never;
  external?: never;
  onClick?: () => void;
  type?: "button" | "submit";
};

type ButtonProps = ButtonAsLink | ButtonAsButton;

const variantClasses: Record<Variant, string> = {
  primary:
    "bg-brand-blue text-white hover:bg-brand-deep shadow-sm hover:shadow-md",
  secondary:
    "bg-white text-brand-deep border border-brand-blue/30 hover:border-brand-blue hover:bg-brand-sky",
  ghost: "bg-transparent text-brand-deep hover:bg-brand-sky",
  whatsapp: "bg-[#25D366] text-white hover:bg-[#1fb958] shadow-sm hover:shadow-md",
};

const base =
  "focus-ring inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-semibold transition-all duration-300 hover:-translate-y-0.5 active:translate-y-0";

export function Button(props: ButtonProps) {
  const { children, variant = "primary", className = "", icon, showArrow } = props;
  const classes = `${base} ${variantClasses[variant]} ${className}`;

  const content = (
    <>
      {icon}
      <span>{children}</span>
      {showArrow && <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />}
    </>
  );

  if ("href" in props && props.href) {
    if (props.external) {
      return (
        <a href={props.href} target="_blank" rel="noopener noreferrer" className={`${classes} group`}>
          {content}
        </a>
      );
    }
    return (
      <Link href={props.href} className={`${classes} group`}>
        {content}
      </Link>
    );
  }

  return (
    <button
      type={"type" in props && props.type ? props.type : "button"}
      onClick={"onClick" in props ? props.onClick : undefined}
      className={`${classes} group`}
    >
      {content}
    </button>
  );
}
