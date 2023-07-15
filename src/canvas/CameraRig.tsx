import React, { ReactNode } from "react";

type CameraRigProps = {
  children: ReactNode;
};

const CameraRig: React.FC<CameraRigProps> = ({ children }) => {
  return <div>{children}</div>;
};
export default CameraRig;
