import { useEffect, useState } from "react";

function Eyes() {
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
    <div className=" eyes w-full h-screen overflow-hidden">
      <div data-scroll data-scroll-speed = "-.7" className="relative bg-cover bg-center w-full h-full bg-[url('./src/components/Images/Eyes.jpg')]">
        <div className="absolute top-1/2 left-1/2 flex gap-10 -translate-x-[50%] -translate-y-[50%]">
          <div className="w-[12vw] h-[12vw] relative rounded-full bg-zinc-200 flex items-center justify-center">
            <div className="inner justify-center items-center flex relative bg-black rounded-full w-[8vw] h-[8vw]">
              <p className="text-white fixed uppercase font-semibold text-xl">
                Play
              </p>
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
              <p className="text-white fixed uppercase font-semibold text-xl">
                Play
              </p>
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
    </div>
  );
}

export default Eyes;
