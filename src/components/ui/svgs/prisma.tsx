import type { SVGProps } from "react";
import raw from "simple-icons/icons/prisma.svg?raw";

const pathMatch = raw.match(/<path d="([^"]+)"/);

export const Prisma = (props: SVGProps<SVGSVGElement>) => (
  <svg role="img" viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d={pathMatch?.[1]} />
  </svg>
);