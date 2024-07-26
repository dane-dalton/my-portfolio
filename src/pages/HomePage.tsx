import { useEffect } from "react";
import usePageIdx from "../hooks/usePageIdx";
import { PageHeader } from "../components";
import { TextGenerateEffect } from "../components/ui/text-generate-effect";
import { homeText, homeTextMobile } from "../constants/pageText.ts";
import BlurInOut from "../components/ui/BlurInOut.tsx";

function HomePage() {
  const { setPageIdx } = usePageIdx();

  useEffect(() => {
    setPageIdx(0);
  }, []);

  return (
    <BlurInOut>
      <div className="absolute z-20 flex h-full w-full flex-col items-center">
        <header>
          <h1 className="stroke-normal mt-[2rem] text-center text-xl lg:text-3xl xl:mt-[3rem]">
            Hello, my name is
          </h1>
          <PageHeader header="Dane Dalton" />
        </header>
        <section className="absolute mx-[1rem] mt-[1rem] flex h-full flex-col items-center justify-evenly text-center text-lg text-slate-200 sm:mx-[4rem] sm:text-[2rem] md:mx-[14rem] md:mt-[2rem] xl:mx-[24rem] xl:text-[2.5rem]">
          <TextGenerateEffect words={homeText} />
          <TextGenerateEffect words={homeTextMobile} className="sm:hidden" />
        </section>
      </div>
    </BlurInOut>
  );
}

export default HomePage;
