import React from "react";
import { useNavigate } from "react-router-dom";
function Home() {
  const navigate = useNavigate();
  return (
    <div className="bg-[#f9f9f9] flex  items-center justify-center h-[100%] gap-10 flex-col lg:flex-col md:flex-col sm:flex-col my-5 mx-5">
      <div className=" flex items-center justify-center h-[100%] gap-5 flex-col lg:flex-row lg:gap-10  ">
        <h2 className=" text-black flex  items-center justify-center flex-col lg:flex-row md:flex-row sm:flex-col my-5 mx-4  text-3xl gap-2 ">
          <h2 className="text-[#FF7F50] font-bold  text-5xl">CITYWEATHER : </h2>
          Your Personal Weather Assistant
        </h2>
      </div>

      <div className=" flex items-center justify-center h-[100%] gap-5 flex-col lg:flex-row lg:gap-20 ">
        <button
          className="inline-block cursor-pointer rounded-md bg-[#FF7F50] px-4 py-3 text-center text-sm font-semibold uppercase text-white transition duration-200 ease-in-out hover:bg-gray-900"
          onClick={() => navigate("/place")}
        >
          Check Weather on one click
        </button>
      </div>

      <div className="flex items-center justify-center h-[100%] gap-5 flex-col lg:flex-row lg:gap-5 ">
        <img
          src="sunny.gif"
          alt=""
          className="h-[300px] w-[400px]  rounded-xl  border-2 "
        />
        <img
          src="clouds.gif"
          alt=""
          className="h-[300px] w-[400px]  rounded-xl  border-2"
        />
        <img
          src="RAINY.webp"
          alt=""
          className="h-[300px] w-[400px]  rounded-xl  border-2"
        />
      </div>

      <div className="flex items-center justify-center h-[100%] gap-5 flex-col lg:flex-row lg:gap-10">
        <div className="flex items-center justify-center h-[100%] gap-5 flex-col ">
          <div className=" text-black text-3xl">
            <h2>About Us </h2>
          </div>
          <div className="w-[800px] text-gray-700">
            Welcome to CityWeather, your go-to weather assistant designed to
            provide accurate and reliable weather information for any location,
            including your current one. With a user-friendly interface and
            real-time updates, our app ensures you stay prepared for every
            weather condition. Whether planning your day or a trip, CityWeather
            gives you instant access to forecasts, temperature, humidity, and
            more. We are committed to delivering convenience and precision,
            making weather tracking effortless and accessible for everyone,
            everywhere.
          </div>
        </div>
        <div>
          <img
            src="./logosed.webp"
            alt=""
            className="w-[17rem] h-[15rem] rounded-full  border-4 border-[#FF7F50]  "
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
