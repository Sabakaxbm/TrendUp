import * as React from "react";
import { SVGProps } from "react";

const SvgCalendar = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 30 30"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M21.25 2.5c.69 0 1.25.56 1.25 1.25V5h1.25a3.75 3.75 0 0 1 3.75 3.75v15a3.75 3.75 0 0 1-3.75 3.75H6.25a3.75 3.75 0 0 1-3.75-3.75v-15A3.75 3.75 0 0 1 6.25 5H7.5V3.75a1.25 1.25 0 1 1 2.5 0V5h10V3.75c0-.69.56-1.25 1.25-1.25ZM5 15v8.75c0 .69.56 1.25 1.25 1.25h17.5c.69 0 1.25-.56 1.25-1.25V15H5Zm0-2.5h20V8.75c0-.69-.56-1.25-1.25-1.25H22.5v1.25a1.25 1.25 0 0 1-2.5 0V7.5H10v1.25a1.25 1.25 0 0 1-2.5 0V7.5H6.25C5.56 7.5 5 8.06 5 8.75v3.75Z"
      fill="#8D9CAA"
    />
  </svg>
);

export default SvgCalendar;
