import * as React from "react";
import { SVGProps } from "react";

const SvgVisibility = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1.4em"
    height="1.3em"
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M10 3.333c2.99 0 5.63 2.027 7.926 5.953l.172.298.236.416-.408.714C15.63 14.64 12.99 16.667 10 16.667s-5.63-2.027-7.926-5.953l-.171-.298L1.667 10l.236-.416C4.239 5.463 6.936 3.334 10 3.334ZM10 5c-2.252 0-4.393 1.596-6.412 5 2.02 3.404 4.16 5 6.412 5 2.192 0 4.274-1.508 6.24-4.713l.173-.287-.174-.287C14.271 6.506 12.19 5 10 5Zm0 2.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5Z"
      fill="#BBB"
    />
  </svg>
);

export default SvgVisibility;
