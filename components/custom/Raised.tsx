import type { FC } from "react";

const Raised: FC = ({ children }) => {
  return <div className="bg-white shadow-raised-box">{children}</div>;
};

export default Raised;
