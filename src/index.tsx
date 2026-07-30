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
      <path d="M9.6 11.8h.01M14.4 11.8h.01" />
      <path d="M11.1 14.1c.4.5 1 .8 1.8.8s1.4-.3 1.8-.8" />
      <path d="M12 12.8v1.3" />
      <path d="M8.1 13.5 5.2 13M8.1 15.1 5.6 16.2M15.9 13.5l2.9-.5M15.9 15.1l2.5 1.1" />
    </IconFrame>
  ),
);
CatIcon.displayName = "CatIcon";

export const DogIcon = React.forwardRef<SVGSVGElement, CritterIconProps>(
  (props, ref) => (
    <IconFrame ref={ref} {...props}>
      <path d="M8.2 8.2 5.1 6.4l.8 4.1a7 7 0 0 0-1.4 4.1c0 3.4 3 5.9 7.5 5.9s7.5-2.5 7.5-5.9c0-1.5-.5-2.9-1.4-4.1l.8-4.1-3.1 1.8" />
      <path d="M9.7 12h.01M14.3 12h.01" />
      <path d="M10.5 15.3c.5.4 1 .6 1.5.6s1-.2 1.5-.6" />
      <path d="M10.4 13.8c.3-.7.8-1 1.6-1s1.3.3 1.6 1c-.4.5-.9.8-1.6.8s-1.2-.3-1.6-.8Z" />
      <path d="M7.7 9.2a2.6 2.6 0 0 0 .4-1.8M16.3 9.2a2.6 2.6 0 0 1-.4-1.8" />
    </IconFrame>
  ),
);
DogIcon.displayName = "DogIcon";

export const TurtleIcon = React.forwardRef<SVGSVGElement, CritterIconProps>(
  (props, ref) => (
    <IconFrame ref={ref} {...props}>
      <path d="M6 14.8a6.2 6.2 0 0 1 12 0Z" />
      <path d="M8.7 14.8c.2-2.5 1.3-4.4 3.3-5.8 2 1.4 3.1 3.3 3.3 5.8M7.5 11.8h9" />
      <path d="M18.3 12.4h1.2a1.8 1.8 0 1 1 0 3.6h-1.2" />
      <path d="M5.7 12.7H4.2c-.7 0-1.3.3-1.7.8l-.7.8 2 .3" />
      <path d="m8 14.8-1 2M10.7 14.8l-.4 2.1M13.8 14.8l.4 2.1M16 14.8l1 2" />
      <path d="M19.3 12.4h.01" />
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
