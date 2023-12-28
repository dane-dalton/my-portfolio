import { LeftScrollArrow } from "../components";
import OtherPagesHeader from "../components/OtherPagesHeader";
import Project from "../components/Project.tsx";

import { projects } from "../constants/projectInfo.ts";

function ProjectsPage() {
  const pageIdx = 2;
  return (
    <div className="absolute z-10 flex h-full w-full flex-col items-center">
      <OtherPagesHeader header="Projects" />
      <LeftScrollArrow pagesIdx={pageIdx} />
      <section className="mx-[24rem]">
        <ul className="grid grid-cols-3 items-center justify-items-center gap-8">
          {projects.map((project) => (
            <li key={project.id}>
              <Project project={project} />
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}

export default ProjectsPage;
