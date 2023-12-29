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
      <section className="stroke-normal mx-[24rem] flex flex-col items-start justify-center gap-8 text-center text-[35px]">
        <p>
          This website is a portfolio for some of my projects, a showcase of my
          creative expression, and an opportunity to learn TypeScript.
        </p>
        <p>
          I had a lot of fun making this portfolio. I hope you enjoy it too!
        </p>
        <p className="stroke-normal absolute right-[10rem] top-[52%] max-w-[300px] text-center">
          About Me
        </p>
      </section>
    </div>
  );
}

export default HomePage;
