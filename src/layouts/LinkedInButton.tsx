import { AiOutlineLinkedin } from "react-icons/ai";

function LinkedInButton() {
  return (
    <>
      <a
        href="https://www.linkedin.com/in/dane-dalton/"
        target="_blank"
        className="absolute bottom-2 left-[13rem] z-10 h-10 w-[9.5rem]"
      />
      <div className="absolute bottom-2 left-[13rem] flex items-center gap-2 bg-slate-900 text-white">
        <AiOutlineLinkedin className="h-10 w-10" />
        <p>dane-dalton</p>
      </div>
    </>
  );
}

export default LinkedInButton;
