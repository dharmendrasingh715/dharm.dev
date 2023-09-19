import type { FC } from "react";

const Raised: FC = () => {
  return <div className="bg-white shadow-raised-box">{children}</div>;
};

export default Raised;
