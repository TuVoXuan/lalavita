import * as React from "react";
const ArrowRight = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={20}
    height={20}
    viewBox="0 0 20 20"
    {...props}
  >
    <path fill="none" d="M19.7.007H.008v20H19.7v-20z" />
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="m18.946 10.857-4.142 3.991-1.053-1.015 3.401-3.277H.323V9.121h16.821l-3.393-3.27 1.053-1.015 4.142 3.992v-.001l1.053 1.015-1.053 1.015z"
    />
  </svg>
);
export default ArrowRight;
