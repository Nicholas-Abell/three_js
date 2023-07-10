import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useSnapshot } from "valtio";

import state from "../store";

import {
  headContainerAnimation,
  headContentAnimation,
  headTextAnimation,
  slideAnimation,
} from "../config/motion";

type HomeProps = {};

const Home: React.FC<HomeProps> = () => {
  const snap = useSnapshot(state);

  return (
    <AnimatePresence>
      {snap.intro && (
        <motion.div className="" {...slideAnimation("left")}>
          <motion.header>
            <img
              src="./threejs.pmg"
              alt="logo"
              className="w-8 h-8 object-contain"
            />
          </motion.header>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
export default Home;
