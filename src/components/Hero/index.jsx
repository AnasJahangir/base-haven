import React from "react";
import "./index.css";
import MainButton from "../MainButton";
function Hero() {
  return (
    <>
      <div className="flex flex-col h-[100vh] justify-center items-center  text-white relative z-10">
        <div className="hero-small-heading">
          Powered by passion, fueled by innovation
        </div>
        <h1 className="text-[30px] md:text-[47px] w-[80%] md:w-[50%] text-center main-heading font-semibold mt-9">
          A safe haven defi ecosystem built for the Base blockchain
        </h1>
        <MainButton className={"mt-7"} />
     
      </div>
    </>
  );
}

export default Hero;
