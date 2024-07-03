import * as React from "react";
const DownSelect = (props: any) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={16}
    height={16}
    fill="none"
    className="icon"
    {...props}
  >
    <path
      fill={props.fill || "#000"}
      d="M8 10.667a.667.667 0 0 1-.427-.153l-4-3.334a.667.667 0 1 1 .854-1.027L8 9.14l3.573-2.88a.667.667 0 0 1 .94.1.667.667 0 0 1-.093.973l-4 3.22a.667.667 0 0 1-.42.114Z"
    />
  </svg>
);
export default DownSelect;
