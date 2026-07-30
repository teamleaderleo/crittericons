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
      strokeWidth = 1.15,
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
        d="M5.8 16c0-3.3 2.7-5.6 6.2-5.6s6.2 2.3 6.2 5.6c0 2.5-1.7 3.9-4.4 3.9H10.2C7.5 19.9 5.8 18.5 5.8 16Z"
        fill="#CFC0F6"
      />
      <path
        d="M6.7 8.4 6.4 4.6l3 1.5c.8-.4 1.7-.6 2.6-.6 1 0 1.8.2 2.6.6l3-1.5-.3 3.8c.7.8 1.1 1.9 1.1 3.1 0 2.9-2.7 5-6.4 5s-6.4-2.1-6.4-5c0-1.2.4-2.3 1.1-3.1Z"
        fill="#CFC0F6"
      />
      <path
        d="M16.8 17.7c2.1.4 3.5-.5 3.4-1.8-.1-1-.9-1.5-1.6-1.1-.8.4-.8 1.3-.1 1.8"
        stroke="#CFC0F6"
        strokeWidth={2.6}
      />
      <path d="M16.8 17.7c2.1.4 3.5-.5 3.4-1.8-.1-1-.9-1.5-1.6-1.1" />
      <ellipse cx="12" cy="13" rx="2.2" ry="1.7" fill="#FFF3E5" stroke="none" />
      <path d="M8.9 10.5c.5.4 1.1.4 1.6 0M13.5 10.5c.5.4 1.1.4 1.6 0" />
      <path d="M11.4 12.2c.4.3.8.3 1.2 0M12 12.3v.6M10.9 13.2c.6.6 1.6.6 2.2 0" />
      <path d="M8.2 12.2 5.4 11.7M8.1 13.4l-2.5.7M15.8 12.2l2.8-.5M15.9 13.4l2.5.7" />
      <ellipse cx="9.7" cy="18.4" rx="1.35" ry=".75" fill="#B4A3E9" stroke="none" />
      <ellipse cx="14.3" cy="18.4" rx="1.35" ry=".75" fill="#B4A3E9" stroke="none" />
    </IconFrame>
  ),
);
CatIcon.displayName = "CatIcon";

export const DogIcon = React.forwardRef<SVGSVGElement, CritterIconProps>(
  (props, ref) => (
    <IconFrame ref={ref} {...props}>
      <path
        d="M7 16c0-3 2.2-5.1 5-5.1s5 2.1 5 5.1c0 2.5-1.4 3.8-3.6 3.8h-2.8C8.4 19.8 7 18.5 7 16Z"
        fill="#E8A968"
      />
      <path
        d="M7.1 8.6C8.3 6.9 10 6 12 6s3.7.9 4.9 2.6c.7 1 1.1 2.2 1.1 3.5 0 3.1-2.7 5.4-6 5.4s-6-2.3-6-5.4c0-1.3.4-2.5 1.1-3.5Z"
        fill="#F1BC79"
      />
      <path
        d="M7.5 8.5C6 7 4.1 6.5 3.5 7.6c-.7 1.3.5 4.4 2 5.2.8.4 1.5-.1 1.5-1"
        fill="#CE7C52"
      />
      <path
        d="M16.5 8.5c1.5-1.5 3.4-2 4-.9.7 1.3-.5 4.4-2 5.2-.8.4-1.5-.1-1.5-1"
        fill="#CE7C52"
      />
      <path d="M16.6 18.1c2 .4 3.5-.4 3.5-1.6 0-.9-.7-1.4-1.4-1.1" />
      <ellipse cx="12" cy="13.2" rx="2.6" ry="2" fill="#FFF0D5" stroke="none" />
      <circle cx="9.6" cy="10.8" r=".55" fill="currentColor" stroke="none" />
      <circle cx="14.4" cy="10.8" r=".55" fill="currentColor" stroke="none" />
      <path
        d="M10.9 12.8c.3-.5.7-.7 1.1-.7s.8.2 1.1.7c-.3.5-.6.7-1.1.7s-.8-.2-1.1-.7Z"
        fill="currentColor"
      />
      <path d="M10.5 14.2c.4.4.9.6 1.5.6s1.1-.2 1.5-.6" />
      <path d="M11.2 14.8c0 .9.3 1.4.8 1.4s.8-.5.8-1.4" fill="#E77E8E" />
      <ellipse cx="9.8" cy="18.7" rx="1.2" ry=".65" fill="#D28D55" stroke="none" />
      <ellipse cx="14.2" cy="18.7" rx="1.2" ry=".65" fill="#D28D55" stroke="none" />
    </IconFrame>
  ),
);
DogIcon.displayName = "DogIcon";

export const TurtleIcon = React.forwardRef<SVGSVGElement, CritterIconProps>(
  (props, ref) => (
    <IconFrame ref={ref} {...props}>
      <ellipse cx="10.6" cy="13.2" rx="6.4" ry="4.8" fill="#78B98D" />
      <path d="M16.7 11.4h1.6a2.8 2.8 0 0 1 0 5.6h-1.7" fill="#A9D5A8" />
      <path d="M4.4 12.3 2.3 14l2.2.8" fill="#A9D5A8" />
      <path
        d="M7.1 16.6c-.8 1.3-.7 2.5.2 2.8.8.3 1.6-.4 1.9-1.8M13.2 17c.2 1.4.9 2.2 1.7 2 .8-.2 1.1-1.1.8-2.4"
        fill="#A9D5A8"
      />
      <path d="M7.2 9.3c1.3 1 2.1 2.3 2.4 3.9M14 9.3c-1.3 1-2.1 2.3-2.4 3.9M4.8 13.2h11.7" />
      <circle cx="19" cy="13" r=".5" fill="currentColor" stroke="none" />
      <path d="M18.5 14.6c.5.5 1.1.5 1.6 0" />
      <circle cx="6.8" cy="11.8" r=".55" fill="#D6E9A7" stroke="none" />
      <circle cx="14.2" cy="11.8" r=".55" fill="#D6E9A7" stroke="none" />
    </IconFrame>
  ),
);
TurtleIcon.displayName = "TurtleIcon";

export const DinoIcon = React.forwardRef<SVGSVGElement, CritterIconProps>(
  (props, ref) => (
    <IconFrame ref={ref} {...props}>
      <path
        d="M3 17.5c2.7.1 4.6-.6 5.6-2.2.8-1.3.8-3 1.3-4.6.7-2.7 2.7-4.5 5.5-4.5h1.2c2.1 0 3.7 1.7 3.7 3.7v1.5h-4.8c.1 1.1-.1 2.2-.6 3.2-.9 1.8-2.7 2.9-4.9 2.9H7.7"
        fill="#E7868D"
      />
      <path d="m10.7 9.2-1.3-1.6M12.6 6.9 11.9 5M14.9 6.2l.2-2" fill="#F2B4A5" />
      <path d="M7.7 16.1 6.5 19.7h2.3M11.6 17.2l.8 2.5h2.1" fill="#E7868D" />
      <path d="M15.4 12.4c.9.2 1.7.7 2.3 1.4" />
      <circle cx="17" cy="8.7" r=".55" fill="currentColor" stroke="none" />
      <path d="M18.2 10.2c.5.3 1 .3 1.5 0" />
      <path d="M12 15.1c-.3.8-.1 1.4.5 1.6" />
      <circle cx="15.1" cy="10.9" r=".45" fill="#F6C6B8" stroke="none" />
    </IconFrame>
  ),
);
DinoIcon.displayName = "DinoIcon";
