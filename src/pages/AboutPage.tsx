import { useEffect } from "react";
import usePageIdx from "../hooks/usePageIdx";
import { PageHeader } from "../components";
import { resumePDF } from "../assets";

function AboutPage() {
  const { setPageIdx } = usePageIdx();

  useEffect(() => {
    setPageIdx(1);
  }, []);

  return (
    <div className="absolute z-10 flex h-full w-full flex-col items-center">
      <PageHeader header="About Me" />
      <section className="xs:text-md mx-[1rem] my-0 flex h-full flex-col items-center justify-between gap-4 text-center text-slate-200 sm:mx-[12rem] md:mx-[16rem] md:my-2 md:text-lg lg:mx-[18rem] lg:my-2 lg:text-lg xl:mx-[24rem] xl:my-8 xl:text-xl xxl:my-[3rem]">
        <p>
          I am proud to say I've built a strong foundation in technology that
          helps me excel when I am handed a new problem or concept.
        </p>
        <p>
          Nothing makes me more excited than solving a problem that has stumped
          me. Most recently, I found a bug with our ASP.NET connection string
          that gave us some issues with our test deployment. I remember cheering
          when I received the Slack notification that my solution worked.
          Moments like these are what I look forward to for the rest of my life
          as a software developer.
        </p>
        <p>
          I am currently looking for a full time software position. Please check
          out my resume below for more information.
        </p>
        <a href={resumePDF} target="_blank">
          <button
            type="button"
            className="project-border-shadow mb-[3.5rem] rounded-lg border-2 bg-slate-900 p-2 text-slate-200 transition-all duration-150 ease-linear hover:bg-slate-200 hover:text-slate-800 sm:mb-4 sm:p-4"
          >
            Resume
          </button>
        </a>
      </section>
    </div>
  );
}

export default AboutPage;
