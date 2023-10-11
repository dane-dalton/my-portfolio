import { Outlet } from "react-router-dom";
import { VscGithub } from "react-icons/vsc";
import { AiOutlineLinkedin } from "react-icons/ai";

function HomeLayout() {
  return (
    <div className="relative isolate h-screen w-screen before:absolute before:left-0 before:top-0 before:z-10 before:h-screen before:w-screen before:bg-gradient-to-br before:from-purple-bg-1 before:via-purple-bg-2 before:via-45% before:to-orange-bg-1 before:mix-blend-multiply before:content-[''] ">
      <div className="flex h-full w-full items-center justify-center bg-slate-900">
        <div className="absolute inset-8 flex items-center justify-center rounded-3xl bg-white font-bold">
          <div className="absolute inset-4 overflow-hidden rounded-3xl bg-slate-900">
            <Outlet />
            <a
              href="https://github.com/dane-dalton"
              target="_blank"
              className="absolute bottom-2 left-10 z-10 h-10 w-[9.5rem]"
            />
            <div className="absolute bottom-2 left-10 z-0 flex items-center gap-2 bg-slate-900 text-white">
              <VscGithub className="h-10 w-10" />
              <p>dane-dalton</p>
            </div>
            <a
              href="https://www.linkedin.com/in/dane-dalton/"
              target="_blank"
              className="absolute bottom-2 left-[13rem] z-10 h-10 w-[9.5rem]"
            />
            <div className="absolute bottom-2 left-[13rem] flex items-center gap-2 bg-slate-900 text-white">
              <AiOutlineLinkedin className="h-10 w-10" />
              <p>dane-dalton</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomeLayout;
