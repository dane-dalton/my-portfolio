import { useEffect } from "react";
import usePageIdx from "../hooks/usePageIdx";
import { PageHeader } from "../components";
import { resumePDF } from "../assets";
import { aboutText1, aboutText2, aboutText3 } from "../constants/pageText";
import { TextGenerateEffect } from "../components/ui/text-generate-effect";

function AboutPage() {
  const { setPageIdx } = usePageIdx();

  useEffect(() => {
    setPageIdx(1);
  }, []);

  return (
    <div className="absolute z-20 flex h-full w-full flex-col items-center">
      <PageHeader header="About Me" />
      <section className="text-md mx-[1rem] my-0 flex h-full flex-col items-center justify-between gap-4 text-center text-slate-200 sm:mx-[12rem] md:mx-[16rem] md:mb-2 md:text-lg lg:mx-[18rem] lg:my-2 lg:text-lg xl:mx-[21rem] xl:mb-8 xl:mt-0 xl:text-xl xxl:my-[1rem]">
        <TextGenerateEffect words={aboutText1} />
        <TextGenerateEffect words={aboutText2} />
        <TextGenerateEffect words={aboutText3} />
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
