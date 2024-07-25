import { useEffect, useState } from "react";
import { PageHeader } from "../components";
import { projects } from "../constants/projectInfo.ts";
import usePageIdx from "../hooks/usePageIdx.tsx";
import BlurInOut from "../components/ui/BlurInOut.tsx";
import { InfiniteMovingCards } from "../components/ui/infinite-moving-cards.tsx";
import ProjectModal from "../components/ProjectModal.tsx";
import { AnimatePresence } from "framer-motion";
import { ProjectProps } from "../constants/projectTypes.ts";

function ProjectsPage() {
  const { setPageIdx } = usePageIdx();
  const [projectInfo, setProjectInfo] = useState<ProjectProps | null>(null);
  const [modalOpen, setModalOpen] = useState(false);

  const open = () => setModalOpen(true);
  const close = () => setModalOpen(false);

  const handleClickProject = (proj: ProjectProps) => setProjectInfo(proj);

  useEffect(() => {
    setPageIdx(2);
  }, []);

  return (
    <BlurInOut>
      <div className="absolute z-20 flex h-full w-full flex-col items-center">
        <PageHeader header="Projects" />
        <section className="absolute top-1/3 mx-[2rem] my-auto mt-[1rem] flex h-full w-full items-center justify-center sm:mx-[10rem] md:mx-[18rem] lg:mx-[24rem]">
          <InfiniteMovingCards
            projects={projects}
            speed="normal"
            handleClickProject={handleClickProject}
            open={open}
          />
        </section>
        <AnimatePresence mode="wait">
          {modalOpen && (
            <ProjectModal project={projectInfo} closeModal={close} />
          )}
        </AnimatePresence>
      </div>
    </BlurInOut>
  );
}

export default ProjectsPage;
