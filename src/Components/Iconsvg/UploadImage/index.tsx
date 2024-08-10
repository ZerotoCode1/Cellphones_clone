const UploadImage = (props: any) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <path
      fill="#637381"
      d="M3 8c0 .55.45 1 1 1s1-.45 1-1V6h2c.55 0 1-.45 1-1s-.45-1-1-1H5V2c0-.55-.45-1-1-1s-1 .45-1 1v2H1c-.55 0-1 .45-1 1s.45 1 1 1h2v2Z"
    />
    <circle cx={13} cy={14} r={3} fill="#637381" />
    <path
      fill="#637381"
      fillRule="evenodd"
      d="M17.83 6H21c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H5c-1.1 0-2-.9-2-2V9.72c.3.17.63.28 1 .28 1.1 0 2-.9 2-2V7h1c1.1 0 2-.9 2-2 0-.37-.11-.7-.28-1h6.4c.56 0 1.1.24 1.47.65L17.83 6ZM8 14c0 2.76 2.24 5 5 5s5-2.24 5-5-2.24-5-5-5-5 2.24-5 5Z"
      clipRule="evenodd"
    />
  </svg>
);
export default UploadImage;
