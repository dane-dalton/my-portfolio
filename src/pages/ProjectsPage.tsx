import { LeftScrollArrow } from "../components";

function ProjectsPage() {
  const pageIdx = 2;
  return (
    <div className="absolute z-10 flex h-full w-full flex-col items-center">
      <h1 className="stroke-header mt-[2rem] text-center text-[12rem]">
        Projects
      </h1>
      <LeftScrollArrow pagesIdx={pageIdx} />
    </div>
  );
}

export default ProjectsPage;
