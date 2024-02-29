import { useEffect } from "react";
import usePageIdx from "../hooks/usePageIdx";
import { PageHeader } from "../components";
import { TextGenerateEffect } from "../components/ui/text-generate-effect";
import { homeText, homeTextMobile } from "../constants/pageText.ts";

function HomePage() {
  const { setPageIdx } = usePageIdx();

  useEffect(() => {
    setPageIdx(0);
  }, []);

  return (
    <div className="absolute z-10 flex h-full w-full flex-col items-center">
      <h1 className="stroke-normal mt-[3rem] text-center text-xl lg:text-3xl">
        Hello, my name is
      </h1>
      <PageHeader header="Dane Dalton" />
      <section className="md:stroke-home mx-[2rem] flex h-1/2 flex-col items-center text-center text-[1.5rem] text-slate-200 xs:mx-[4rem] md:mx-[20rem] md:text-[2rem] xl:mx-[23rem] xl:text-[2.5rem]">
        <TextGenerateEffect words={homeText} />
        <TextGenerateEffect words={homeTextMobile} className="sm:hidden" />
      </section>
    </div>
  );
}

export default HomePage;
