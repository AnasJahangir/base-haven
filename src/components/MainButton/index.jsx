import React from "react";
import { IoIosArrowRoundForward } from "react-icons/io";

function MainButton({ className }) {
  return (
    <button
      className={`main-btn flex items-center justify-center ${className}`}
    >
      Launch DAPP{" "}
      <span className="ms-2 text-[25px] ">
        <IoIosArrowRoundForward className="font-black" />
      </span>
    </button>
  );
}

export default MainButton;
