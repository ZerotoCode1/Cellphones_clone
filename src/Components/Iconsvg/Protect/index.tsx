import * as React from "react";
const Protect = (props: any) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={20}
    height={20}
    fill="none"
    viewBox="0 0 12 12"
    {...props}
  >
    <path
      stroke="#121219"
      d="M10.54 3a16.6 16.6 0 0 1-.29 4c-.356 1.804-2.41 3.087-3.528 3.662-.456.234-.99.234-1.445 0C4.16 10.087 2.105 8.804 1.75 7a16.591 16.591 0 0 1-.29-4 .877.877 0 0 1 .483-.736C2.773 1.842 4.6 1 6 1s3.228.842 4.057 1.264c.282.144.466.42.483.736Z"
    />
    <path
      stroke="#121219"
      strokeLinecap="round"
      strokeLinejoin="round"
      d="m4.5 5.832.77.88a.5.5 0 0 0 .77-.02l1.46-1.86"
    />
  </svg>
);
export default Protect;
