import { useEffect } from "react";
import usePageIdx from "../hooks/usePageIdx";
import { PageHeader } from "../components";
import { TextGenerateEffect } from "../components/ui/text-generate-effect";
import { homeText, homeTextMobile } from "../constants/pageText.ts";
import BlurInOut from "../components/ui/BlurInOut.tsx";
import DevIconPrimary from "../components/DevIconPrimary.tsx";
import DevIconSecondary from "../components/DevIconSecondary.tsx";

function HomePage() {
  const { setPageIdx } = usePageIdx();

  useEffect(() => {
    setPageIdx(0);
  }, []);

  return (
    <BlurInOut>
      <div className="absolute z-20 flex h-full w-full flex-col items-center">
        <header>
          <h1 className="stroke-normal mt-[1rem] text-center text-xl lg:mt-[1.5rem] lg:text-3xl xl:mt-[3rem]">
            Hello, my name is
          </h1>
          <PageHeader header="Dane Dalton" />
        </header>
        <section className="relative mx-[1rem] mb-[2rem] flex h-full flex-col items-center justify-evenly text-center text-lg text-slate-200 sm:mx-[4rem] sm:text-[1.75rem] md:mx-[14rem] xl:mx-[22rem] xl:text-[2.5rem]">
          <TextGenerateEffect words={homeText} />
          <span>
            <div className="flex flex-col items-center gap-2 text-3xl lg:gap-4 lg:text-5xl">
              <h4 className="text-lg text-slate-300 underline lg:text-2xl">
                2 Years Professional Experience
              </h4>
              <DevIconPrimary />
            </div>

            <div className="mt-2 flex flex-col items-center gap-2 text-2xl lg:mt-4 lg:gap-4 lg:text-3xl">
              <h4 className="text-base text-slate-300 underline lg:text-xl">
                Miscellaneous Projects
              </h4>
              <DevIconSecondary />
            </div>
          </span>
          <TextGenerateEffect words={homeTextMobile} className="sm:hidden" />
        </section>
      </div>
    </BlurInOut>
  );
}

export default HomePage;
