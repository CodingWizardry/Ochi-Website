import { motion } from "framer-motion";

function Marque() {
  return (
    <div data-scroll data-scroll-section data-scroll-speed =".3" className="w-full py-20 bg-[#004D43] rounded-tl-3xl rounded-tr-3xl">
      <div className="text border-t-[1px] border-b-[1px] border-zinc-300 flex overflow-hidden whitespace-nowrap ">
        <motion.h1
          initial={{ x: 0 }}
          animate={{ x: "-100%" }}
          transition={{ repeat: Infinity, ease: "linear", duration: 10 }}
          className="marq-text text-white text-[15vw] leading-none tracking-tighter pr-10 font-bold uppercase"
        >
          we are ochi
        </motion.h1>
        <motion.h1
          initial={{ x: 0 }}
          animate={{ x: "-100%" }}
          transition={{ repeat: Infinity, ease: "linear", duration: 10 }}
          className="marq-text text-white text-[15vw] leading-none tracking-tighter pr-10 font-bold uppercase"
        >
          we are ochi
        </motion.h1>
      </div>
    </div>
  );
}

export default Marque;
