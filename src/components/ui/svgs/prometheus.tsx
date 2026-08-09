import type { SVGProps } from "react";
import raw from "simple-icons/icons/prometheus.svg?raw";

const pathMatch = raw.match(/<path d="([^"]+)"/);

export const Prometheus = (props: SVGProps<SVGSVGElement>) => (
  <svg role="img" viewBox="0 0 24 24" fill="#E6522C" {...props}>
    <path d={pathMatch?.[1]} />
  </svg>
);