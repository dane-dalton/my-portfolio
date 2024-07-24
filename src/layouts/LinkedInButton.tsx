import { AiOutlineLinkedin } from "react-icons/ai";

function LinkedInButton() {
  return (
    <>
      <a
        href="https://www.linkedin.com/in/dane-dalton/"
        target="_blank"
        className="absolute bottom-[10px] left-[5.5rem] z-20 h-[54px] w-[58px] rounded-full md:left-[14rem] md:w-[156px]"
      />
      <div className="absolute bottom-2 left-[5.5rem] flex animate-pulse items-center gap-2 rounded-full border border-slate-400 bg-slate-900 p-2 text-white shadow-[0_0_25px_0_rgba(0,0,0,0.1)] shadow-white sm:left-[14rem]">
        <AiOutlineLinkedin className="h-10 w-10" />
        <p className="hidden sm:block">dane-dalton</p>
      </div>
    </>
  );
}

export default LinkedInButton;
