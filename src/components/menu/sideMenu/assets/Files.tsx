import * as React from "react";
import { SVGProps } from "react";

const SvgFiles = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="m1 16 .117-.007a1 1 0 0 0 .876-.876L2 15V2h13l.117-.007a1 1 0 0 0 0-1.986L15 0H1L.883.007a1 1 0 0 0-.876.876L0 1v14l.007.117a1 1 0 0 0 .876.876L1 16Zm18 4 .117-.007a1 1 0 0 0 .876-.876L20 19V5l-.007-.117a1 1 0 0 0-.764-.857l-.112-.02L19 4H5l-.117.007a1 1 0 0 0-.876.876L4 5v14l.007.117a1 1 0 0 0 .764.857l.112.02L5 20h14ZM6 6v12h12V6H6Z"
    />
  </svg>
);

export default SvgFiles;
