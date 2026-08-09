import type { SVGProps } from "react";
import raw from "simple-icons/icons/git.svg?raw";

const pathMatch = raw.match(/<path d="([^"]+)"/);

export const Git = (props: SVGProps<SVGSVGElement>) => (
  <svg role="img" viewBox="0 0 24 24" fill="#F05032" {...props}>
    <path d={pathMatch?.[1]} />
  </svg>
);