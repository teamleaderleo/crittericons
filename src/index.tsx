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
      strokeWidth = 1.5,
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
      <path d="M5.7 9.1 5 5.8l2.8 1.5a8.5 8.5 0 0 1 8.4 0L19 5.8l-.7 3.3a7 7 0 0 1 1.2 3.9c0 3.8-3.1 6.7-7.5 6.7S4.5 16.8 4.5 13a7 7 0 0 1 1.2-3.9Z" />
      <path d="M9.5 11.8h.01M14.5 11.8h.01M12 13.3h.01M12 13.4v.7" />
      <path d="M10.4 14.4c.5.5 1 .7 1.6.7s1.1-.2 1.6-.7" />
      <path d="M8.1 13.6 5.3 13M8 15.1l-2.5 1M15.9 13.6l2.8-.6M16 15.1l2.5 1" />
    </IconFrame>
  ),
);
CatIcon.displayName = "CatIcon";

export const DogIcon = React.forwardRef<SVGSVGElement, CritterIconProps>(
  (props, ref) => (
    <IconFrame ref={ref} {...props}>
      <path d="M7.8 8.7A6 6 0 0 1 12 7.1a6 6 0 0 1 4.2 1.6c1.1 1.2 1.8 2.8 1.8 4.6 0 3.8-2.7 6.4-6 6.4s-6-2.6-6-6.4c0-1.8.7-3.4 1.8-4.6Z" />
      <path d="M7.8 9C6.6 7.3 4.8 6.2 4.1 7.1c-.7 1 .1 4.8 1.4 5.9.7.6 1.5.1 1.7-.8M16.2 9c1.2-1.5 2.5-2.4 3.8-2.7l-.6 5.3c-.1.7-.7 1.1-1.3.9" />
      <path d="M9.7 12.1h.01M14.3 12.1h.01M12 13.6h.01" />
      <path d="M10.3 15.1c.5.5 1.1.8 1.7.8s1.2-.3 1.7-.8" />
      <path d="M11.2 16.2c0 .9.3 1.4.8 1.4s.8-.5.8-1.4" />
    </IconFrame>
  ),
);
DogIcon.displayName = "DogIcon";

export const TurtleIcon = React.forwardRef<SVGSVGElement, CritterIconProps>(
  (props, ref) => (
    <IconFrame ref={ref} {...props}>
      <ellipse cx="11" cy="13.2" rx="6.4" ry="4.7" />
      <path d="M17 11.2h1.5a2.7 2.7 0 1 1 0 5.4H17M4.7 12.4 2.4 14l2.4.7" />
      <path d="M8 9.3c1.2 1 2 2.3 2.4 3.9M14 9.3c-1.2 1-2 2.3-2.4 3.9M5 13.2h12" />
      <path d="M7.1 16.5 6.4 19M10.2 17.7 10 20M14.2 17.1l.5 2.4" />
      <path d="M19.2 13h.01M19.1 14.5c.4.3.8.3 1.1 0" />
    </IconFrame>
  ),
);
TurtleIcon.displayName = "TurtleIcon";

export const DinoIcon = React.forwardRef<SVGSVGElement, CritterIconProps>(
  (props, ref) => (
    <IconFrame ref={ref} {...props}>
      <path d="M4.2 17.3c-1-.3-1.8-1.1-2.7-2.4 2.3.4 4.1.2 5.5-.7.9-.6 1.5-1.3 1.9-2.3l1.2-3.3C10.7 7 12.1 6 13.8 6h3.3c1.8 0 3.2 1.4 3.2 3.2V10h-4.2l-.5 2.9a4.4 4.4 0 0 1-4.4 3.7H8.1" />
      <path d="M7 15.1 5.9 19M10.5 16.2l.9 2.8M15.8 11.1l2.2 1.8" />
      <path d="m10 8.7-1.1-1.3M11.8 6.3 11.2 4.8M13.8 5.4l.2-1.6" />
      <path d="M17.1 7.9h.01" />
    </IconFrame>
  ),
);
DinoIcon.displayName = "DinoIcon";
