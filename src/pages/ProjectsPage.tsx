import { LeftScrollArrow } from "../components";

function ProjectsPage() {
  const pageIdx = 2;
  return (
    <div>
      <h1 className="mt-[5rem] text-center text-9xl text-white">Projects</h1>
      <LeftScrollArrow pagesIdx={pageIdx} />
    </div>
  );
}

export default ProjectsPage;
