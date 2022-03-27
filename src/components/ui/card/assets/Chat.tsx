import * as React from "react";
import { SVGProps } from "react";

const SvgChat = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1.5em"
    height="1.5em"
    viewBox="0 0 21 25"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="m6.986 15-3.938 3.15a.833.833 0 0 1-1.354-.65V4.167a2.5 2.5 0 0 1 2.5-2.5H15.86a2.5 2.5 0 0 1 2.5 2.5V12.5a2.5 2.5 0 0 1-2.5 2.5H6.986Zm-3.625.766 2.812-2.25a.833.833 0 0 1 .52-.183h9.168c.46 0 .833-.373.833-.833V4.167a.833.833 0 0 0-.833-.834H4.194a.833.833 0 0 0-.833.834v11.6Z"
      fill="#5891E2"
    />
  </svg>
);

export default SvgChat;
