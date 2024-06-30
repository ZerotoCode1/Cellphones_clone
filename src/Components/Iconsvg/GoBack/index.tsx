import * as React from "react";
const GoBack = (props: any) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={20}
    height={17}
    fill="none"
    {...props}
  >
    <path
      stroke="#121219"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M19 8.5H1m0 0L8 1M1 8.5 8 16"
    />
  </svg>
);
export default GoBack;
