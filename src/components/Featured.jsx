import { motion, useAnimation } from "framer-motion";
import { GoDotFill } from "react-icons/go";

function Featured() {
  const cards = [
    useAnimation(),
    useAnimation(),
    useAnimation(),
    useAnimation(),
  ];
  const handleHover = (index) => {
    cards[index].start({ y: "0" });
  };
  const handleHoverEnd = (index) => {
    cards[index].start({ y: "100%" });
  };
  return (
    <div className="w-full py-10 bg-zinc-200">
      <div className="w-full py-10 px-20 border-b-2 border-[#777777] pb-10">
        <h1 className="text-[4vw] tracking-tighter leading-none">
          Featured projects
        </h1>
      </div>
      <div className="cards w-full py-10 space-y-16">
        <div className="card-container relative overflow-hidden flex gap-10 px-20">
          <motion.div
            onHoverStart={() => handleHover(0)}
            onHoverEnd={() => handleHoverEnd(0)}
            className="card1 w-1/2 space-y-4 relative"
          >
            <h1 className="absolute flex overflow-hidden right-[-35%] text-[#bddc4a] -translate-x-1/2 top-1/2 -translate-y-1/2 uppercase z-[9] leading-none text-[7vw] font-semibold tracking-tighter">
              {"FYDE".split("").map((item, index) => (
                <motion.span
                  initial={{ y: "100%" }}
                  animate={cards[0]}
                  key={index}
                  transition={{ ease: [0.22, 1, 0.36, 1], delay: index * 0.05 }}
                  className="inline-block"
                >
                  {item}
                </motion.span>
              ))}
            </h1>

            <div className="uppercase">Fyde</div>
            <div className="img">
              <img
                className="rounded-lg"
                src="./src/components/Images/project1.png"
                alt="project1"
              />
            </div>
            <div className="btn flex gap-5 ">
              {["audit", "copywriting", "sales deck", "slides design"].map(
                (item, index) => {
                  return (
                    <div
                      key={index}
                      className="flex border-[1px] border-[#777777] py-2 px-2 uppercase text-sm rounded-full"
                    >
                      {item}
                    </div>
                  );
                }
              )}
            </div>
          </motion.div>
          <motion.div
            onHoverStart={() => handleHover(1)}
            onHoverEnd={() => handleHoverEnd(1)}
            className="card2 w-1/2 relative space-y-4"
          >
            <h1 className="absolute flex overflow-hidden left-[-35%] text-[#bddc4a] translate-x-1/2 top-1/2 -translate-y-1/2 uppercase z-[9] leading-none text-[7vw] font-semibold tracking-tighter">
              {"VISE".split("").map((item, index) => (
                <motion.span
                  initial={{ y: "100%" }}
                  animate={cards[1]}
                  key={index}
                  transition={{ ease: [0.22, 1, 0.36, 1], delay: index * 0.05 }}
                  className="inline-block"
                >
                  {item}
                </motion.span>
              ))}
            </h1>

            <div className="uppercase">vise</div>
            <div className="img">
              <img
                className="rounded-lg"
                src="./src/components/Images/project2.jpg"
                alt="project2"
              />
            </div>
            <div className="btn flex gap-5 ">
              {["agency", "company presentation"].map((item, index) => {
                return (
                  <div
                    key={index}
                    className="flex border-[1px] border-[#777777] py-2 px-2 uppercase text-sm rounded-full"
                  >
                    {item}
                  </div>
                );
              })}
            </div>
          </motion.div>
        </div>

        <div className="card-container flex gap-10 px-20">
          <motion.div
            onHoverStart={() => handleHover(2)}
            onHoverEnd={() => handleHoverEnd(2)}
            className="card3 w-1/2 relative space-y-4"
          >
            <h1 className="absolute flex overflow-hidden right-[-50%] text-[#bddc4a] -translate-x-1/2 top-1/2 -translate-y-1/2 uppercase z-[9] leading-none text-[6vw] font-semibold tracking-tighter">
              {"TRAWA".split("").map((item, index) => (
                <motion.span
                  initial={{ y: "100%" }}
                  animate={cards[2]}
                  key={index}
                  transition={{ ease: [0.22, 1, 0.36, 1], delay: index * 0.05 }}
                  className="inline-block"
                >
                  {item}
                </motion.span>
              ))}
            </h1>
            <div className="uppercase">TRAWA</div>
            <div className="img">
              <img
                className="rounded-lg"
                src="./src/components/Images/project3.jpg"
                alt="project3"
              />
            </div>
            <div className="btn flex gap-5 ">
              {["brand identity", "design research", "investor deck"].map(
                (item, index) => {
                  return (
                    <div
                      key={index}
                      className="flex border-[1px] border-[#777777] py-2 px-2 uppercase text-sm rounded-full"
                    >
                      {item}
                    </div>
                  );
                }
              )}
            </div>
          </motion.div>
          <motion.div
            onHoverStart={() => handleHover(3)}
            onHoverEnd={() => handleHoverEnd(3)}
            className="card4 relative w-1/2 space-y-4"
          >
            <h1 className="absolute flex overflow-hidden right-[100%] text-[#bddc4a] w-full translate-x-1/2 top-1/2 -translate-y-1/2 uppercase z-[9] leading-none text-[6vw] font-semibold tracking-tighter">
              {"PREMIUM BLEND".split("").map((item, index) => (
                <motion.span
                initial={{ y: "100%" }}
                animate={cards[3]}
                key={index}
                transition={{ ease: [0.22, 1, 0.36, 1], delay: index * 0.02 }}
                className="inline-block"
              >
                {item}
              </motion.span>
              ))}
            </h1>
            <div className="uppercase">PREMIUM BLEND</div>
            <div className="img">
              <img
                className="rounded-lg"
                src="./src/components/Images/project4.png"
                alt="project4"
              />
            </div>
            <div className="btn flex gap-5 ">
              {["branded template"].map((item, index) => {
                return (
                  <div
                    key={index}
                    className="flex border-[1px] border-[#777777] py-2 px-2 uppercase text-sm rounded-full"
                  >
                    {item}
                  </div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </div>
      <div className="case-studies w-full flex items-center justify-center py-10">
        <div className=" flex gap-5 items-center px-8 py-4 border-[1px] border-black rounded-full bg-black text-white uppercase text-md">
          view all case studies
          <span className="font-bold">
            <GoDotFill />
          </span>
        </div>
      </div>
    </div>
  );
}

export default Featured;
