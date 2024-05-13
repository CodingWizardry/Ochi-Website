import { AiOutlineCopyrightCircle } from "react-icons/ai";
import { IoStar } from "react-icons/io5";

function Cards() {
  return (
    <div className="w-full py-10 bg-zinc-200 gap-5 flex px-20">
      <div className="card1 w-1/2 bg-[#004c43] rounded-lg ">
        <h2 className="text-[#cdeb69] font-bold pt-36 pb-24 text-5xl text-center">
          ochi
        </h2>
        <div className="pl-10 pt-7">
          <div className="flex py-2 px-2 items-center text-[#cdeb69] text-center justify-center rounded-full w-1/4 border-[1px] border-[#cdeb69]">
            <AiOutlineCopyrightCircle />
            2019-2022
          </div>
        </div>
      </div>
      <div className="card2 w-[25%] bg-black rounded-lg">
        <div>
          <h2 className="text-white pt-32 text-5xl text-center font-bold">Clutch</h2>
          <div className="star text-[#cdeb69] flex  items-center justify-center pt-5 pb-24 ">
            <IoStar />
            <IoStar />
            <IoStar />
            <IoStar />
            <IoStar />
          </div>
        </div>

        <div className="pl-10">
          <div className="flex py-2 px-2 items-center text-white tracking-tighter text-center justify-center uppercase rounded-full w-[70%] border-[1px] border-zinc-300 mb-10">
            Rating 5.0 on clutch
          </div>
        </div>
      </div>
      <div className="card3 w-[25%] bg-[#004c43] rounded-lg space-y-20">
        <div className="pt-32 flex justify-center">
        <img className="image-card" src="./src/components/Images/logo.png"/>
        </div>
        
        <div className="pl-10 ">
          <div className="flex py-2 px-2 items-center text-white tracking-tighter text-center justify-center uppercase rounded-full w-[80%] border-[1px] border-zinc-300 mb-10">
            business bootcamp alumini
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cards;
