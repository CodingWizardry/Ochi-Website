import { motion } from "framer-motion";
import { FaArrowUpLong } from "react-icons/fa6";

function LandingPage() {
  return (
    <div data-scroll data-scroll-speed = "-.3"className="w-full h-screen bg-zinc-900 pt-1">
      <div className="text-structure mt-52 px-20">
        {["We Create", "Eye Opening", "Presentations"].map((item, index) => {
          return (
            <div key = {index} className="masker">
              <div className="w-fit flex items-end overflow-hidden ">
                {index === 1 && (
                  <motion.div initial = {{width : 0}} animate = {{width: "7vw"}} transition = {{ease: [0.76, 0, 0.24, 1], duration: 2}}className=" mr-[0.5vw] rounded-md h-[5vw] w-[7vw] -top-[0.5vw] relative bg-red-500">
                    {" "}
                    <img className = "rounded-md " src="./src/components/Images/landing.jpg" />
                  </motion.div>
                )}
                <h1 className=" h-head flex items-center text-white tracking-tighter uppercase text-[7vw] h-full leading-[6vw] -font-['Founder_Grotesk_X-Condensed'] font-bold">
                  {item}
                </h1>
              </div>
            </div>
          );
        })}
      </div>
      <div className="border-t-[1px] border-zinc-800 mt-20 flex justify-between items-center py-5 px-20 ">
        {[
          "For public and private companies",
          "From the first pitch to IPO",
        ].map((item, index) => (
          <p key = {index} className="text-md font-light tracking-tighter text-white">
            {item}
          </p>
        ))}
        <div className="start flex gap-5 items-center">
          <div className="px-4 py-2 border-[1px] border-zinc-300 rounded-full text-white uppercase font-light text-md">
            Start the project
          </div>
          <div className="w-10 h-10 flex items-center justify-center text-white rounded-full border-[1px] border-zinc-300">
            <span className="rotate-[45deg]">
              <FaArrowUpLong />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
