import { LeftScrollArrow } from "../components";
import OtherPagesHeader from "../components/OtherPagesHeader";

function ProjectsPage() {
  const pageIdx = 2;
  return (
    <div className="absolute z-10 flex h-full w-full flex-col items-center">
      <OtherPagesHeader header="Projects" />
      <LeftScrollArrow pagesIdx={pageIdx} />
    </div>
  );
}

export default ProjectsPage;
