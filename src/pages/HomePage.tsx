import { RightScrollArrow, StarryBackground } from "../components";

function HomePage() {
  const pageIdx = 0;
  return (
    <div className="absolute z-10 flex h-full w-full flex-col items-center justify-evenly">
      <RightScrollArrow pagesIdx={pageIdx} />
      <StarryBackground />
      <h1 className="stroke-normal text-center text-3xl">Hello, my name is</h1>
      <h2 className="stroke-header -mb-[3rem] -mt-[6rem] text-[10rem]">
        Dane Dalton
      </h2>
      <section className="flex flex-col items-start justify-center gap-[5rem] text-4xl text-blue-800">
        <p className="max-w-[600px]">
          This website serves as a portfolio for some of my projects, a showcase
          for some of my creative expression, and an opportunity to start
          learning TypeScript.
        </p>
        <p className="max-w-[600px]">
          I had a lot of fun making this portfolio! I hope you enjoy it as well.
        </p>
        <p className="absolute right-[10rem] top-1/2 max-w-[300px] text-center">
          About me and my projects.
        </p>
      </section>
    </div>
  );
}

export default HomePage;
