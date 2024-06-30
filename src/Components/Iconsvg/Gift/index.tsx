import * as React from "react";
const Gift = (props: any) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={20}
    height={20}
    fill="none"
    viewBox="0 0 12 12"
    {...props}
  >
    <path
      stroke="#444"
      d="M2 6v3a2 2 0 0 0 2 2h4a2 2 0 0 0 2-2V6M9 6H3a1.5 1.5 0 1 1 0-3h6a1.5 1.5 0 1 1 0 3Z"
    />
    <path stroke="#444" strokeLinecap="round" d="M6 10.5V3" />
    <path
      stroke="#444"
      d="M8.5 2c0-.072-.004-.142-.012-.211C8.343.559 6.792 1.049 6 2c.792.95 2.343 1.44 2.488.211.008-.069.012-.14.012-.211ZM3.5 2c0-.072.004-.142.012-.211C3.657.559 5.208 1.049 6 2c-.792.95-2.343 1.44-2.488.211A1.811 1.811 0 0 1 3.5 2Z"
    />
  </svg>
);
export default Gift;
