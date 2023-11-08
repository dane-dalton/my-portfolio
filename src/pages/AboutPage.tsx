import { LeftScrollArrow, RightScrollArrow } from "../components";

function AboutPage() {
  const pageIdx = 1;
  return (
    <div className="absolute z-10 flex h-full w-full flex-col items-center justify-center">
      <h1 className="stroke-header mt-[5rem] text-center text-9xl drop-shadow-md">
        About Me
      </h1>
      <LeftScrollArrow pagesIdx={pageIdx} />
      <RightScrollArrow pagesIdx={pageIdx} />
    </div>
  );
}

export default AboutPage;
