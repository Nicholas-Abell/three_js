import React from "react";

import state from "../store";
import { useSnapshot } from "valtio";

type CustomButtonProps = {
  type: string;
  title: string;
  handleClick: () => void;
  customStyles: string;
};

const CustomButton: React.FC<CustomButtonProps> = ({
  type,
  title,
  handleClick,
  customStyles,
}) => {
  const snap = useSnapshot(state);
  const generateStyle = (type) => {
    if (type === "filled") {
      return {
        backgroundColor: snap.color,
        color: "#FFF",
      };
    }
  };

  return (
    <button
      style={generateStyle(type)}
      className={`${customStyles} px-2 py-1.5 flex-1 rounded-md`}
      onClick={handleClick}
    >
      {title}
    </button>
  );
};
export default CustomButton;
