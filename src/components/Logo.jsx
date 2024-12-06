import React from "react";
import { useNavigate } from "react-router-dom";
const Logo = () => {
  const navigate = useNavigate();
  return (
    <div className=" flex alignItems-center gap-1  h-[50px] my-1 ">
      <div className="mx-2 my-2 flex flex-row gap-1">
        <img
          src="/CITYWEATHER.jpg"
          alt="openai"
          className="w-[30px] h-[30px] rounded-full image-inverted hover:scale-150 transistion full"
          onClick={() => navigate("/")}
        />
        <div className=" my-1 flex flex-row ">
          <h2 className=" font-15px text-white">CITYWEATHER</h2>
        </div>
      </div>
    </div>
  );
};

export default Logo;
