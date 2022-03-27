import * as React from "react";
import { SVGProps } from "react";

const SvgLogoNews = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 120 36"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    {...props}
  >
    <path fill="url(#LogoNews_svg__a)" d="M.899.577h119v35h-119z" />
    <defs>
      <pattern
        id="LogoNews_svg__a"
        patternContentUnits="objectBoundingBox"
        width={1}
        height={1}
      >
        <use xlinkHref="#LogoNews_svg__b" transform="scale(.0084 .02857)" />
      </pattern>
      <image
        id="LogoNews_svg__b"
        width={119}
        height={35}
        xlinkHref="data:image/png;base64,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"
      />
    </defs>
  </svg>
);

export default SvgLogoNews;
