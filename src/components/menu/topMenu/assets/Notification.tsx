import * as React from "react";
import { SVGProps } from "react";

const SvgNotification = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="40px"
    height="40px"
    viewBox="0 0 30 30"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M6.25 25a1.25 1.25 0 0 1-1.176-1.677l.058-.132 1.444-2.889a8.75 8.75 0 0 0 .914-3.506l.01-.407V12.5a7.502 7.502 0 0 1 6.25-7.396V3.75a1.25 1.25 0 1 1 2.5 0v1.354a7.503 7.503 0 0 1 6.243 7.088l.007.308v3.89c0 1.222.256 2.43.75 3.544l.173.368 1.445 2.889a1.25 1.25 0 0 1-.974 1.801L23.75 25H17.5a2.5 2.5 0 0 1-5 0H6.25ZM15 7.5a5 5 0 0 0-4.994 4.75L10 12.5v3.89a11.25 11.25 0 0 1-1 4.637l-.188.393-.54 1.08h13.455l-.54-1.08a11.25 11.25 0 0 1-1.179-4.595L20 16.39V12.5a5 5 0 0 0-5-5Z"
      fill="#8D9CAA"
    />
  </svg>
);

export default SvgNotification;
