import { useEffect } from "react";
import usePageIdx from "../hooks/usePageIdx";
import { PageHeader } from "../components";
import { resumePDF } from "../assets";
import { aboutText1, myEmail, myLocation } from "../constants/pageText";
import { TextGenerateEffect } from "../components/ui/text-generate-effect";
import BlurInOut from "../components/ui/BlurInOut";

function AboutPage() {
  const { setPageIdx } = usePageIdx();

  useEffect(() => {
    setPageIdx(1);
  }, []);

  return (
    <BlurInOut>
      <div className="absolute z-20 flex h-full w-full flex-col items-center">
        <PageHeader header="About Me" />
        <div className="flex flex-col items-center text-lg text-slate-200">
          <span className="flex">
            <h4 className="mr-2">Based out of:</h4>
            <p>{myLocation}</p>
          </span>
          <span className="flex">
            <h4 className="mr-2">Contact Me:</h4>
            <p>{myEmail}</p>
          </span>
        </div>
        <section className="text-md mx-[1rem] my-0 flex h-full flex-col items-center text-center text-slate-200 sm:mx-[12rem] md:mx-[16rem] md:mb-2 md:text-xl lg:mx-[18rem] lg:my-2 lg:text-xl xl:mx-[24rem] xl:mb-8 xl:mt-0 xl:text-2xl xxl:my-[1rem]">
          <TextGenerateEffect words={aboutText1} className="mt-[2rem]" />
          <a href={resumePDF} target="_blank">
            <button
              type="button"
              className="project-border-shadow absolute bottom-0 left-[42%] mb-[3.5rem] rounded-lg border-2 bg-slate-900 p-2 text-slate-200 transition-all duration-150 ease-linear hover:bg-slate-200 hover:text-slate-800 sm:mb-4 sm:p-4 md:left-[46%]"
            >
              Resume
            </button>
          </a>
        </section>
      </div>
    </BlurInOut>
  );
}

export default AboutPage;
