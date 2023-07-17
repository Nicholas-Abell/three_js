import React, { ReactNode, useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { easing } from "maath";
import { useSnapshot } from "valtio";
import state from "../store";

type CameraRigProps = {
  children: ReactNode;
};

const CameraRig: React.FC<CameraRigProps> = ({ children }) => {
  const group = useRef();
  return <group>{children}</group>;
};
export default CameraRig;
