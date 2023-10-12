import { RightScrollArrow } from "../components";

function HomePage() {
  const pageIdx = 0;
  return (
    <div className="absolute z-10 flex h-full w-full flex-col items-center justify-center">
      <h1 className="mt-[5rem] text-center text-2xl text-orange-300">
        Hello, my name is
      </h1>
      <RightScrollArrow pagesIdx={pageIdx} />
      <h2 className="text-9xl text-orange-400">Dane Dalton</h2>
      <section className="mt-[2rem] flex flex-col items-start justify-center gap-[5rem] text-4xl text-orange-200">
        <p className="max-w-[600px]">
          This website serves as a portfolio for some of my projects, a showcase
          for some of my creative expression, and an opportunity to start
          learning TypeScript.
        </p>
        <p className="max-w-[600px]">
          If it looks like I decided to have fun with my website, it is because
          I did! I hope you enjoy it as well.
        </p>
        <p className="absolute right-[10rem] top-1/2 max-w-[500px] text-center">
          Scroll to learn more about me and my projects.
        </p>
      </section>
    </div>
  );
}

export default HomePage;
