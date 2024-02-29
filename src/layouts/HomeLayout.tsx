import { Outlet } from "react-router-dom";
import GitHubButton from "./GitHubButton";
import LinkedInButton from "./LinkedInButton";
import { ImageBottomRight } from "../components";
import { MobileNav, StarryBackground } from "./navigation";
import { SparklesCore } from "../components/ui/sparkles";

function HomeLayout() {
  return (
    <div className="relative isolate h-screen w-screen before:absolute before:left-0 before:top-0 before:z-10 before:h-screen before:w-screen before:bg-gradient-to-br before:from-purple-bg-1 before:via-purple-bg-2 before:via-45% before:to-orange-bg-1 before:mix-blend-multiply before:content-[''] ">
      <div className="flex h-full w-full items-center justify-center bg-slate-900">
        <div className="absolute inset-1 flex items-center justify-center rounded-3xl bg-white font-bold sm:inset-8">
          <div className="absolute inset-4 overflow-hidden rounded-3xl bg-slate-900">
            <StarryBackground />
            <MobileNav />
            <Outlet />
            <GitHubButton />
            <LinkedInButton />
            <ImageBottomRight />
            <SparklesCore
              id="tsparticlesfullpage"
              background="transparent"
              speed={1}
              minSize={0.2}
              maxSize={1.4}
              particleDensity={66}
              className="relative z-10 h-full w-full"
              particleColor="#ffffff"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomeLayout;
