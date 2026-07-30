import * as React from "react";

export type CritterIconProps = Omit<
  React.SVGProps<SVGSVGElement>,
  "children"
> & {
  /** Width and height of the icon. */
  size?: number | string;
  /** Accessible title. Decorative icons can omit this. */
  title?: string;
};

type IconFrameProps = CritterIconProps & {
  children: React.ReactNode;
};

const IconFrame = React.forwardRef<SVGSVGElement, IconFrameProps>(
  (
    {
      size = 24,
      title,
      strokeWidth = 1.75,
      children,
      ...props
    },
    ref,
  ) => {
    const titleId = React.useId();
    const isLabelled = Boolean(
      title || props["aria-label"] || props["aria-labelledby"],
    );

    return (
      <svg
        ref={ref}
        xmlns="http://www.w3.org/2000/svg"
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
        {...props}
        role={isLabelled ? "img" : undefined}
        aria-hidden={isLabelled ? undefined : true}
        aria-labelledby={title ? titleId : props["aria-labelledby"]}
      >
        {title ? <title id={titleId}>{title}</title> : null}
        {children}
      </svg>
    );
  },
);

IconFrame.displayName = "CritterIconFrame";

export const CatIcon = React.forwardRef<SVGSVGElement, CritterIconProps>(
  (props, ref) => (
    <IconFrame ref={ref} {...props}>
      <path d="M5.4 8.2 4.5 4.4 8 6.1a8.4 8.4 0 0 1 8 0l3.5-1.7-.9 3.8A7.7 7.7 0 0 1 20 12.6C20 17 16.4 20 12 20s-8-3-8-7.4c0-1.7.5-3.2 1.4-4.4Z" />
      <path d="M8.7 11.7h.01M15.3 11.7h.01" />
      <path d="M10.4 15c.5.5 1 .7 1.6.7s1.1-.2 1.6-.7M12 13.5v2" />
      <path d="M7.3 14 3 13M7.2 16 3.5 17M16.7 14l4.3-1M16.8 16l3.7 1" />
    </IconFrame>
  ),
);
CatIcon.displayName = "CatIcon";

export const DogIcon = React.forwardRef<SVGSVGElement, CritterIconProps>(
  (props, ref) => (
    <IconFrame ref={ref} {...props}>
      <path d="M7.2 7.2A7.5 7.5 0 0 1 12 5.5a7.5 7.5 0 0 1 4.8 1.7c1.6 1.3 2.5 3.2 2.5 5.3 0 4.4-3.3 7.5-7.3 7.5s-7.3-3.1-7.3-7.5c0-2.1.9-4 2.5-5.3Z" />
      <path d="M7.2 7.3C5.8 5.8 3.8 5 2.8 5.8c-.9.8-.2 4.7 1.9 6.1M16.8 7.3c1.4-1.5 3.4-2.3 4.4-1.5.9.8.2 4.7-1.9 6.1" />
      <path d="M9 11.7h.01M15 11.7h.01" />
      <path d="M10 15.2c.6.7 1.2 1 2 1s1.4-.3 2-1" />
      <path d="M10.7 14c.4-.5.8-.7 1.3-.7s.9.2 1.3.7c-.3.6-.7.9-1.3.9s-1-.3-1.3-.9Z" />
    </IconFrame>
  ),
);
DogIcon.displayName = "DogIcon";

export const TurtleIcon = React.forwardRef<SVGSVGElement, CritterIconProps>(
  (props, ref) => (
    <IconFrame ref={ref} {...props}>
      <path d="M5.3 15.7a6.8 6.8 0 0 1 6.5-8.8 6.8 6.8 0 0 1 6.6 8.8Z" />
      <path d="M8.2 15.7c.3-2.9 1.5-5.1 3.6-6.7 2.1 1.6 3.3 3.8 3.6 6.7M6.7 11.2h10.2" />
      <path d="M18.3 11.2h1.2a2.1 2.1 0 1 1 0 4.2h-1.1M5.5 12.5H3.8a1.7 1.7 0 0 0-1.3.6l-1 1.2 2 .4" />
      <path d="m7 15.8-1.2 2.3M10.2 15.8l-.5 2.5M14.6 15.8l.7 2.4" />
      <path d="M20 13.1h.01" />
    </IconFrame>
  ),
);
TurtleIcon.displayName = "TurtleIcon";

export const DinoIcon = React.forwardRef<SVGSVGElement, CritterIconProps>(
  (props, ref) => (
    <IconFrame ref={ref} {...props}>
      <path d="M4.2 17.4c-1.1-.4-2-1.3-2.7-2.6 2.4.4 4.3.2 5.7-.7.7-.5 1.2-1.1 1.5-1.9l1.6-4.3c.6-1.7 2.2-2.9 4-2.9h3.4c1.8 0 3.3 1.5 3.3 3.3v.9h-4.6l-.7 3.5c-.4 2.2-2.3 3.8-4.6 3.8H8.3" />
      <path d="M7 15.2 5.8 20M10.6 16.5l1 3.5M15.9 11.8l2.5 2.2M17.1 7.7h.01" />
      <path d="m9.8 8.9-1.4-1.7M11.5 6.2l-.7-2M13.7 5.1l.2-2" />
    </IconFrame>
  ),
);
DinoIcon.displayName = "DinoIcon";
