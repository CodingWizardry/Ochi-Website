import { useEffect, useState } from "react";
import { GoDotFill } from "react-icons/go";

function Playful() {
  const [rotate, setRotate] = useState(0);
  useEffect(() => {
    window.addEventListener("mousemove", (e) => {
      let mouseX = e.clientX;
      let mouseY = e.clientY;

      let deltaX = mouseX - innerWidth / 2;
      let deltaY = mouseY - innerHeight / 2;

      var angle = Math.atan2(deltaY, deltaX) * (180 / Math.PI);
      setRotate(angle - 180);
    });
  });
  return (
    <div className="py-40 w-full bg-[#cdeb69]">
      <div className="flex w-full relative justify-center ">
        <h1 className="text-[10vw] uppercase font-bold tracking-tighter leading-none text-black text-center">
          Ready
          <br /> to start
          <br /> the project?
        </h1>
        <div className="absolute top-1/2 left-1/2 flex gap-10 -translate-x-[50%] -translate-y-[50%]">
          <div className="w-[12vw] h-[12vw] relative rounded-full bg-zinc-200 flex items-center justify-center">
            <div className="inner justify-center items-center flex relative bg-black rounded-full w-[8vw] h-[8vw]">
              <p className="text-white fixed uppercase font-semibold text-xl"></p>
              <div
                style={{
                  transform: `translate(-50%, -50%) rotate(${rotate}deg)`,
                }}
                className=" line absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] w-full "
              >
                <div className="w-[1.5vw] h-[1.5vw] rounded-full bg-zinc-200"></div>
              </div>
            </div>
          </div>
          <div className="w-[12vw] h-[12vw] relative rounded-full bg-zinc-200 flex items-center justify-center">
            <div className="inner justify-center items-center flex relative bg-black rounded-full w-[8vw] h-[8vw]">
              <p className="text-white fixed uppercase font-semibold text-xl"></p>
              <div
                style={{
                  transform: `translate(-50%, -50%) rotate(${rotate}deg)`,
                }}
                className=" line absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] w-full "
              >
                <div className="w-[1.5vw] h-[1.5vw] rounded-full bg-zinc-200"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center mt-10">
        <div className="rounded-full bg-black flex">
          <div className=" flex gap-10 justify-center items-center uppercase py-2 px-4 text-white">
            start the project
            <GoDotFill />
          </div>
        </div>
      </div>
                <div className="uppercase text-black text-center mt-10">or</div>
      <div className="flex justify-center mt-10">
        <div className="rounded-full border-[1px] border-zinc-700 flex">
          <div className=" flex gap-10 justify-center font-light items-center uppercase py-2 px-4 text-black">
            hello@ochi.design
            <GoDotFill />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Playful;
