import { GoDotFill } from "react-icons/go";
function About() {
  return (
    <div className="bg-[#cdeb69] w-full rounded-tl-3xl rounded-tr-3xl py-20">
      <div className=" px-20">
        <p className="text-black text-[4vw] tracking-tighter leading-[4vw]">
          Ochi is a strategic partner for fast-grow­ing tech
        </p>
        <p className="text-black text-[4vw] tracking-tighter leading-[4vw]">
          businesses that need to raise funds, sell prod­ucts,
        </p>
        <p className="text-black text-[4vw] tracking-tighter leading-[4vw]">
          ex­plain com­plex ideas, and hire great peo­ple.
        </p>
      </div>
      <div className="border-b-[1px] border-[#777777] mt-16 w-full"></div>

      <div className="pt-5 flex justify-between gap-10 px-20 w-full mb-20">
        <div className="w-[50%]">What you expect:</div>
        <div className="w-[40%]">
          We create tailored presentations to help
          <br /> you persuade your colleagues, clients, or
          <br /> investors. Whether it’s live or digital,
          <br /> delivered for one or a hundred people.
          <br /> <br /> <br /> We believe the mix of strategy and
          <br /> design (with a bit of coffee) is what
          <br /> makes your message clear, convincing,
          <br /> and captivating.
        </div>
        <div className="w-[10%] pt-[7%]">
          S:
          <br /> <br />
          {["Instagram", "Behance", "Facebook", "Linkedin"].map(
            (item, index) => (
              <p key = {index} className="underline">{item}</p>
            )
          )}
        </div>
      </div>
      <div className="border-b-[1px] border-[#777777] mt-16 w-full"></div>

      <div className="pt-7 w-full px-20 flex justify-between">
        <div className="w-[50%]">
          <h3 className="text-5xl leading-3 tracking-tighter ">
            Our approach:
          </h3> 
          <div className="start flex mt-10">
            <div className=" flex gap-5 items-center px-5 py-3 border-[1px] border-black rounded-full bg-black text-white uppercase font-semibold text-md">
              read more
              <span className="font-bold">
                <GoDotFill />
              </span>
            </div>
          </div>
        </div>
        <div className="image w-[50%]">
          <img className="rounded-md" src="./src/components/Images/about.jpg" />
        </div>
      </div>
    </div>
  );
}
export default About;
