import * as React from "react";
import { SVGProps } from "react";

const SvgLink = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1.5em"
    height="1.5em"
    viewBox="0 2 21 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="m2.92 11.184 2.37-2.368a.838.838 0 0 1 1.249 1.11L6.474 10l-2.37 2.369a2.513 2.513 0 0 0 3.447 3.655l.107-.102 2.37-2.369a.837.837 0 0 1 1.249 1.112l-.065.073-2.37 2.369a4.188 4.188 0 0 1-6.047-5.791l.125-.132Zm8.291-8.29a4.188 4.188 0 1 1 5.923 5.921l-2.37 2.37A.838.838 0 0 1 13.58 10l2.37-2.369a2.513 2.513 0 0 0-3.554-3.553l-2.369 2.369a.838.838 0 1 1-1.184-1.185l2.368-2.369Zm0 4.737a.837.837 0 1 1 1.185 1.184L8.843 12.37a.838.838 0 1 1-1.185-1.185l3.554-3.553Z"
      fill="#BBB"
    />
  </svg>
);

export default SvgLink;
