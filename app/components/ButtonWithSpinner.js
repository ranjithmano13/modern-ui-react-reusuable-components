import React from "react";
import { CircularProgress } from "@mui/material";

const ButtonWithSpinner = ({
  onClick,
  styles,
  clicked,
  disabled,
  type,
  title,
  icon
 
}) => {
 
  return (
    <button
      className={`${styles} disabled:cursor-not-allowed disabled:bg-gray-800 disabled:scale-[1] flex flex-row items-center justify-center gap-2`}
      onClick={onClick}
      disabled={disabled}
      type={type}
    >
      {icon}{title}
      {clicked && <CircularProgress color="inherit" size={20} />}
    </button>
  );
};

export default ButtonWithSpinner;

