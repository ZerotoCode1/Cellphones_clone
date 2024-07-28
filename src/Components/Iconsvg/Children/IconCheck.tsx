import * as React from "react";
const IconCheck = (props: any) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={12}
    height={12}
    fill="none"
    {...props}
  >
    <path
      fill="#D70018"
      stroke="#D70018"
      strokeWidth={1.5}
      d="M11 6A5 5 0 1 0 1 6a5 5 0 0 0 10 0Z"
    />
    <path
      stroke="#fff"
      strokeLinecap="round"
      strokeLinejoin="round"
      d="m3.75 5.75.956 1.093a1 1 0 0 0 1.539-.041L8.25 4.25"
    />
  </svg>
);
export default IconCheck;
