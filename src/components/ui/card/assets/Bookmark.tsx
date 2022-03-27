import * as React from "react";
import { SVGProps } from "react";

const SvgBookmark = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1.2em"
    height="1.2em"
    viewBox="0 0 16 21"
    fill="#BBBBBB"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M1.65 19.76A1 1 0 0 1 0 19V3a3 3 0 0 1 3-3h10a3 3 0 0 1 3 3v16a1 1 0 0 1-1.65.76L8 14.316 1.65 19.76ZM14 16.825V3a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1v13.826l5.35-4.585a1 1 0 0 1 1.3 0L14 16.826Z"
    />
  </svg>
);

export default SvgBookmark;
