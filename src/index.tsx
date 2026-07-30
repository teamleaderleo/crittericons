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
      color = "#382F46",
      strokeWidth = 1.1,
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
        color={color}
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
      <path
        d="M8.5 13.8c-1.6 1.1-2.4 2.7-2.2 4.3.1 1.2 1.1 2 2.5 2h6.1c1.9 0 3.2-1.1 3.2-2.8 0-1.8-1.1-3.4-3-4.3"
        fill="#CFC0F6"
      />
      <path
        d="M6.7 8.2 6.4 4.8l2.7 1.3c.9-.4 1.8-.7 2.9-.7s2 .3 2.9.7l2.7-1.3-.3 3.4c.7.8 1.1 1.8 1.1 2.9 0 2.8-2.6 4.8-6.4 4.8s-6.4-2-6.4-4.8c0-1.1.4-2.1 1.1-2.9Z"
        fill="#D8CBFA"
      />
      <path
        d="M17.1 18.3c2.3.5 3.8-.4 3.8-1.7 0-1-.9-1.5-1.7-1.1-.7.4-.7 1.2-.1 1.7"
        stroke="#CFC0F6"
        strokeWidth={2.7}
      />
      <path d="M17.1 18.3c2.3.5 3.8-.4 3.8-1.7 0-1-.9-1.5-1.7-1.1" />
      <ellipse cx="12" cy="12.5" rx="2.2" ry="1.55" fill="#FFF3E5" stroke="none" />
      <path d="M8.9 10.2c.5.4 1.1.4 1.6 0M13.5 10.2c.5.4 1.1.4 1.6 0" />
      <path d="M11.5 12c.3.25.7.25 1 0M12 12.1v.55M11 13c.55.5 1.45.5 2 0" />
      <path d="M8.1 12 5.6 11.6M8.1 13.1l-2.3.6M15.9 12l2.5-.4M15.9 13.1l2.3.6" />
      <path d="M9.3 18.8h1.8M12.9 18.8h1.8" />
    </IconFrame>
  ),
);
CatIcon.displayName = "CatIcon";

export const DogIcon = React.forwardRef<SVGSVGElement, CritterIconProps>(
  (props, ref) => (
    <IconFrame ref={ref} {...props}>
      <path
        d="M7.5 15.5c0-2.8 2-4.7 4.7-4.7 2.9 0 5 2 5 4.9v1.7c0 1.8-1.2 2.8-3.1 2.8H10.5c-1.9 0-3-1-3-2.7Z"
        fill="#E7A665"
      />
      <path d="M16.8 18.2c2.1.4 3.7-.4 3.7-1.7 0-1-.8-1.5-1.6-1.1" />
      <path
        d="M8.4 18.9c-.4-1.4 0-2.5 1-2.8.9-.2 1.7.5 1.8 1.6M15.9 18.9c.4-1.4 0-2.5-1-2.8-.9-.2-1.7.5-1.8 1.6"
        fill="#F1BC79"
      />
      <g transform="rotate(-5 12 10.8)">
        <path
          d="M7.2 8.5c1.2-1.8 2.9-2.8 5-2.8s3.8 1 5 2.8c.7 1 1 2.2.9 3.5-.2 3.2-2.7 5.4-6.1 5.3-3.4-.1-5.8-2.5-5.7-5.6 0-1.2.3-2.3.9-3.2Z"
          fill="#F4C27F"
        />
        <path
          d="M7.8 8.5C6.3 6.9 4.4 6.4 3.7 7.5c-.8 1.3.3 4.6 1.9 5.4.9.5 1.7-.1 1.7-1.1"
          fill="#C97850"
        />
        <path
          d="M16.5 8.5c1.3-1.2 2.8-1.6 4-.9.3 1.7-.2 3.7-1.5 4.8-.8.6-1.7.2-1.8-.8"
          fill="#C97850"
        />
        <ellipse cx="12" cy="13.1" rx="2.7" ry="2" fill="#FFF0D5" stroke="none" />
        <circle cx="9.6" cy="10.7" r=".55" fill="currentColor" stroke="none" />
        <circle cx="14.4" cy="10.7" r=".55" fill="currentColor" stroke="none" />
        <path
          d="M10.9 12.7c.3-.5.7-.7 1.1-.7s.8.2 1.1.7c-.3.45-.65.65-1.1.65s-.8-.2-1.1-.65Z"
          fill="currentColor"
        />
        <path d="M10.5 14.1c.4.45.9.65 1.5.65s1.1-.2 1.5-.65" />
        <path d="M11.25 14.7c0 .85.3 1.3.75 1.3s.75-.45.75-1.3" fill="#E77E8E" />
      </g>
    </IconFrame>
  ),
);
DogIcon.displayName = "DogIcon";

export const TurtleIcon = React.forwardRef<SVGSVGElement, CritterIconProps>(
  (props, ref) => (
    <IconFrame ref={ref} {...props}>
      <path
        d="M4.2 14.4c.5-4.3 3.8-7.1 8-7.1 3.5 0 6.1 1.8 7.2 4.8v3.3H5.1Z"
        fill="#74BA8B"
      />
      <path d="M5.1 12.1 2.4 14l2.9.9" fill="#A2D89F" />
      <path d="M17.8 11.2h1.4a3.2 3.2 0 0 1 0 6.4h-2.1l.2-5Z" fill="#A2D89F" />
      <path
        d="M7.3 15.3c-.8 1.6-.6 2.9.4 3.2 1.1.3 2-.8 2.2-2.5M14.4 15.3c.2 1.7 1.1 2.8 2.1 2.5 1-.3 1.2-1.5.4-3"
        fill="#A2D89F"
      />
      <path d="M7.2 10.6c1.2-1.2 2.8-1.8 4.8-1.8s3.6.6 4.8 1.8M6 13h12.6" />
      <path d="M9.1 8.1 7.7 12.8M14.9 8.1l1.4 4.7" />
      <circle cx="19.9" cy="13.4" r=".55" fill="currentColor" stroke="none" />
      <path d="M19 15.1c.6.6 1.4.6 2 0" />
    </IconFrame>
  ),
);
TurtleIcon.displayName = "TurtleIcon";

export const DinoIcon = React.forwardRef<SVGSVGElement, CritterIconProps>(
  (props, ref) => (
    <IconFrame ref={ref} {...props}>
      <path
        d="M7.7 11.6 6.4 9.1l2.5.7M10.5 8.7l-.6-2.7 2.3 1.4M13.5 6.2l.2-2.7 1.9 1.9"
        fill="#F2B1A7"
      />
      <path
        d="M6.4 15.3c-1.8.9-3.2 1-4.5.6 1.8 1.6 3.6 2.1 5.4 1.6"
        stroke="#E88491"
        strokeWidth={3.2}
      />
      <ellipse cx="11.2" cy="14.3" rx="5.3" ry="4.3" fill="#E88491" />
      <path
        d="M12.4 10.6c0-3.3 2.1-5.6 5.2-5.6 2.5 0 4.2 1.5 4.2 3.8v1.9h-5.5c-.4 1.1-1.2 2-2.4 2.5"
        fill="#E88491"
      />
      <path d="M8.5 17.4 7.4 20h2.5M13.3 17.8l.8 2.2h2.5" fill="#E88491" />
      <path d="M15.4 13.2c.9.2 1.7.7 2.2 1.4M15.7 14.3l1.5.4" />
      <circle cx="18.6" cy="7.5" r=".6" fill="currentColor" stroke="none" />
      <path d="M19.5 9.2c.5.3 1 .3 1.5 0M20.9 10.7l-.5.7" />
      <circle cx="16.4" cy="9.9" r=".45" fill="#F7C6BB" stroke="none" />
    </IconFrame>
  ),
);
DinoIcon.displayName = "DinoIcon";
