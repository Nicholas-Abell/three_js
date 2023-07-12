import React, { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useSnapshot } from "valtio";
import config from "valtio";
import state from "../store";
import { download } from "../assets";
import { downloadCanvasToImage, reader } from "../config/helpers";
import { EditorTabs, FilterTabs, DecalTypes } from "../config/constants";
import { fadeAnimation, slideAnimation } from "../config/motion";

type CustomizerProps = {};

const Customizer: React.FC<CustomizerProps> = () => {
  return <div>Customizer</div>;
};
export default Customizer;
