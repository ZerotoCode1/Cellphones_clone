import * as React from "react";
const CategoryIcon = (props: any) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 26.99 26.99"
      {...props}
    >
      <defs>
        <style>
          {
            ".cls-1{fill:none;stroke:#fff;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.8px}"
          }
        </style>
      </defs>
      <g id="Layer_2" data-name="Layer 2">
        <g id="Layer_1-2" data-name="Layer 1">
          <path
            d="M7.06 7.52h12.86M7.06 13.49h12.86M7.06 19.47h4.89"
            className="cls-1"
          />
          <rect
            width={25.19}
            height={25.19}
            x={0.9}
            y={0.9}
            className="cls-1"
            rx={4.71}
          />
        </g>
      </g>
    </svg>
  );
};

export default CategoryIcon;
