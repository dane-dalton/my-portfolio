import { VscGithub } from "react-icons/vsc";

function GitHubButton() {
  return (
    <>
      <a
        href="https://github.com/dane-dalton"
        target="_blank"
        className="absolute bottom-2 left-10 z-10 h-10 w-[9.5rem]"
      />
      <div className="absolute bottom-2 left-10 z-0 flex items-center gap-2 bg-slate-900 text-white">
        <VscGithub className="h-10 w-10" />
        <p>dane-dalton</p>
      </div>
    </>
  );
}

export default GitHubButton;
