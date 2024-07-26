import { VscGithub } from "react-icons/vsc";

function GitHubButton() {
  return (
    <>
      <a
        href="https://github.com/dane-dalton"
        target="_blank"
        className="absolute bottom-[10px] left-4 z-20 h-[54px] w-[56px] rounded-full lg:left-10 lg:w-[156px]"
      />
      <div className="absolute bottom-2 left-4 z-0 flex animate-pulse items-center gap-2 rounded-full border border-slate-400 bg-slate-900 p-2 text-white shadow-[0_0_25px_0_rgba(0,0,0,0.1)] shadow-white lg:left-10">
        <VscGithub className="h-10 w-10" />
        <p className="hidden lg:block">dane-dalton</p>
      </div>
    </>
  );
}

export default GitHubButton;
