import { useEffect } from "react";
import usePageIdx from "../hooks/usePageIdx";
import { PageHeader } from "../components";

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
      <section className="stroke-home mx-[2rem] flex h-1/2 items-center text-center text-[1.5rem] max-md:text-slate-200 xs:mx-[4rem] md:mx-[20rem] md:text-[2rem] xl:mx-[23rem] xl:text-[2.5rem]">
        <p>
          This website is a portfolio for some of my projects, a showcase of my
          creative expression, and an opportunity to learn TypeScript.
        </p>
        <p className="mt-8 sm:hidden">
          Please check it out on desktop too for a superior viewing experience!
        </p>
      </section>
    </div>
  );
}

export default HomePage;
