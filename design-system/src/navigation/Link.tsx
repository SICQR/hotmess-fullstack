import * as React from "react";

type Props = React.AnchorHTMLAttributes<HTMLAnchorElement> & {
  external?: boolean;
};

export const Link = React.forwardRef<HTMLAnchorElement, Props>(
  ({ external, ...props }, ref) => (
    <a
      ref={ref}
      target={external ? "_blank" : undefined}
      rel={external ? "noopener noreferrer" : undefined}
      {...props}
    />
  )
);

Link.displayName = "Link";

export default Link;
