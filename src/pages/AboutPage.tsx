import { LeftScrollArrow, RightScrollArrow } from "../components";

function AboutPage() {
  const pageIdx = 1;
  return (
    <div>
      <h1 className="mt-[5rem] text-center text-9xl text-white">About Me</h1>
      <LeftScrollArrow pagesIdx={pageIdx} />
      <RightScrollArrow pagesIdx={pageIdx} />
    </div>
  );
}

export default AboutPage;
