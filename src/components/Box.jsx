import { useState } from "react";

const Box = () => {
  const [count, setCount] = useState(0);
const ethPrice = 0.05;
const value = (count * ethPrice).toFixed(4).substring(0, 4);

const handleIncrement = () => {
  if (count < 10) {
    setCount(count + 1);
  }
  
};

const handleDecrement = () => {
  if (count > 0) {
    setCount(count - 1);
  }
};

  return (
    
    <div className= " absolute md:top-[5%] lg:top-[10%] left-[5%] w-[25%] ">
      <div className="container mx-auto  text-center flex flex-col lg:gap-10 gap-1  justify-center">
        <h1 className=" text-gradient font-black text-center text-sm md:text-xl ">
          LIVE MINT
        </h1>
        <div className="flex flex-row justify-center items-center md:mt-2 sm:mt-1">
          <div className="flex items-center space-x-4">
            <button
              className="bg-gradient-to-r from-indigo-900 to-purple-600  text-white text-sm font-bold w-5 h-5 lg:w-10 lg:h-10 rounded-full"
              onClick={handleDecrement}
            >
              -
            </button>
            <span className="w-14 text-3xl text-center bg-[#180f28]  text-white">
              {count}
            </span>
            <button
              className="bg-gradient-to-r from-indigo-900 to-purple-600  text-white text-sm font-bold w-5 h-5 lg:w-10 lg:h-10  rounded-full"
              onClick={handleIncrement}
            >
              +
            </button>
          </div>
        </div>
        <p className="   text-center justify-start text-white">
          ETH: {value}
        </p>
        <button className=" bg-gradient-to-r from-indigo-900 to-purple-600 lg:p-5 p-1   ">Connect Wallet</button>
      </div>
    </div>
  );
};

export default Box;