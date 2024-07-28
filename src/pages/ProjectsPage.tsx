import { useEffect, useState } from "react";
import { PageHeader } from "../components";
import { projects } from "../constants/projectInfo.ts";
import usePageIdx from "../hooks/usePageIdx.tsx";
import BlurInOut from "../components/ui/BlurInOut.tsx";
import { InfiniteMovingCards } from "../components/ui/infinite-moving-cards.tsx";
import ProjectModal from "../components/ProjectModal.tsx";
import { AnimatePresence } from "framer-motion";
import { ProjectProps } from "../constants/projectTypes.ts";
import { Highlight } from "../components/ui/highlight.tsx";
import { myEmail, myLocation } from "../constants/pageText.ts";
import { Envelope, MapPin, RocketLaunch } from "@phosphor-icons/react";

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
        <section className="absolute bottom-0 top-1/4 mx-[2rem] mt-[1rem] flex h-screen w-full items-center justify-center sm:mx-[10rem] md:mx-[18rem] lg:mx-[24rem]">
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
      <Highlight className="absolute bottom-[6rem] left-0 right-0 mx-auto mt-2 w-[20rem] px-4 py-2 shadow-[0_0_30px_1px_rgba(255,255,255,0.9)] sm:bottom-4 md:w-[24rem] md:px-8">
        <span className="flex w-full justify-center text-base text-slate-700 md:text-lg">
          <MapPin size={28} />
          <div className="flex items-center gap-1">
            <p>{myLocation}</p>
            <RocketLaunch
              size={28}
              className="animate-bounce text-orange-600"
            />
          </div>
        </span>
        <span className="flex w-full justify-center text-base text-slate-700 md:text-lg">
          <Envelope size={28} />
          <p>{myEmail}</p>
        </span>
      </Highlight>
    </BlurInOut>
  );
}

export default ProjectsPage;
