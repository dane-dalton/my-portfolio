import { useEffect } from "react";
import usePageIdx from "../hooks/usePageIdx";
import { PageHeader } from "../components";
import { resumePDF } from "../assets";
import { aboutText1 } from "../constants/pageText";
import { TextGenerateEffect } from "../components/ui/text-generate-effect";
import BlurInOut from "../components/ui/BlurInOut";
import { ArrowFatLinesRight, YoutubeLogo } from "@phosphor-icons/react";

function AboutPage() {
  const { setPageIdx } = usePageIdx();

  useEffect(() => {
    setPageIdx(1);
  }, []);

  return (
    <BlurInOut>
      <div className="absolute z-20 flex h-full w-full flex-col items-center">
        <PageHeader header="About Me" />

        <section className="text-md mx-[1rem] my-0 flex h-full flex-col items-center text-center text-slate-200 sm:mx-[12rem] md:mx-[16rem] md:mb-2 md:text-xl lg:mx-[18rem] lg:my-2 lg:text-xl xl:mx-[24rem] xl:mb-8 xl:mt-0 xl:text-2xl xxl:my-[1rem]">
          <TextGenerateEffect
            words={aboutText1}
            className="mt-[0.5rem] xl:mt-[2rem]"
          />
          <span className="mt-[1rem] flex items-center xl:mt-[4rem]">
            <div className="flex flex-col items-center sm:inline-block">
              My biggest passion outside of software is bouldering. Check out
              some of my climbing over on YouTube!
              <div className="inline-block">
                <div className="flex items-center sm:absolute sm:-mt-8 sm:ml-4">
                  <div className="animate-bounceRight">
                    <ArrowFatLinesRight size={38} />
                  </div>
                  <a
                    href="https://www.youtube.com/@danedalton"
                    target="_blank"
                    className="text-5xl text-red-600"
                  >
                    <YoutubeLogo />
                  </a>
                </div>
              </div>
            </div>
          </span>
          <a href={resumePDF} target="_blank">
            <button
              type="button"
              className="project-border-shadow absolute bottom-[6rem] left-0 right-0 mx-auto w-[8rem] rounded-lg border-2 bg-slate-900 p-2 text-slate-200 transition-all duration-150 ease-linear hover:bg-slate-200 hover:text-slate-800 sm:bottom-[1rem] sm:mb-4 sm:p-3"
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
