import * as React from "react";
import { SVGProps } from "react";

const SvgArrowRight = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 21 21"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="m11.528 4.315.071-.077a.88.88 0 0 1 1.122-.068l.08.068 5.95 5.687.035.036.047.055.061.09.046.092.03.086.024.12.006.096-.002.061-.015.102-.025.09-.038.09-.044.08-.063.085-.062.067-5.95 5.687a.878.878 0 0 1-1.202 0 .786.786 0 0 1-.07-1.072l.07-.077 4.497-4.3H2.85c-.47 0-.85-.364-.85-.813 0-.449.38-.813.85-.813h13.248l-4.499-4.3a.786.786 0 0 1-.07-1.072l.07-.077-.07.077Z"
      fill="#BCBCBC"
    />
  </svg>
);

export default SvgArrowRight;
