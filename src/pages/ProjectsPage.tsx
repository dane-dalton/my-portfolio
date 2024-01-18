import { useEffect } from "react";
import { PageHeader, Project } from "../components";
import { projects } from "../constants/projectInfo.ts";
import usePageIdx from "../hooks/usePageIdx.tsx";

function ProjectsPage() {
  const { setPageIdx } = usePageIdx();

  useEffect(() => {
    setPageIdx(2);
  }, []);

  return (
    <div className="absolute z-10 flex h-full w-full flex-col items-center">
      <PageHeader header="Projects" />
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
