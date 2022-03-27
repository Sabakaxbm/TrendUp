import * as React from "react";
import { SVGProps } from "react";

const SvgRectangleTrading = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 18 17"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <rect
      x={0.027}
      width={17.027}
      height={17}
      rx={3}
      fill="url(#RectangleTrading_svg__a)"
    />
    <defs>
      <linearGradient
        id="RectangleTrading_svg__a"
        x1={17.054}
        y1={0}
        x2={0.054}
        y2={17.027}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#0038FF" />
        <stop offset={1} stopColor="#00D1FF" />
      </linearGradient>
    </defs>
  </svg>
);

export default SvgRectangleTrading;
