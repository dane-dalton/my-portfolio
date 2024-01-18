import { RightScrollArrow, PageHeader } from "../components";

function HomePage() {
  const pageIdx = 0;
  return (
    <div className="absolute z-10 flex h-full w-full flex-col items-center">
      <RightScrollArrow pagesIdx={pageIdx} />
      <h1 className="stroke-normal mt-[3rem] text-center text-3xl">
        Hello, my name is
      </h1>
      <PageHeader header="Dane Dalton" />
      <section className="stroke-home mx-[24rem] text-center text-[3rem]">
        <p>
          This website is a portfolio for some of my projects, a showcase of my
          creative expression, and an opportunity to learn TypeScript.
        </p>
      </section>
    </div>
  );
}

export default HomePage;
