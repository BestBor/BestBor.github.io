import type { SVGProps } from "react";
import raw from "simple-icons/icons/rabbitmq.svg?raw";

const pathMatch = raw.match(/<path d="([^"]+)"/);

export const Rabbitmq = (props: SVGProps<SVGSVGElement>) => (
  <svg role="img" viewBox="0 0 24 24" fill="#FF6600" {...props}>
    <path d={pathMatch?.[1]} />
  </svg>
);