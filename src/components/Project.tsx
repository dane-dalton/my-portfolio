import { useState } from "react";
import ProjectModal from "./ProjectModal";
import { AnimatePresence } from "framer-motion";
import { GlareCard } from "./ui/glare-card";

type ProjectProps = {
  project: {
    id: string;
    title: string;
    desc: string;
    thumbnailImg: string;
    skills: string[];
  };
};

function Project({ project }: ProjectProps) {
  const thumbImg = project.thumbnailImg;
  const [projectOpen, setProjectOpen] = useState(false);

  function closeModal() {
    setProjectOpen(false);
  }

  return (
    <>
      <button
        type="button"
        onClick={() => setProjectOpen(true)}
        className="cursor-pointer rounded-3xl bg-[rgba(255,255,255,0.4)] shadow-[0_0_30px_1px_rgba(255,255,255,0.9)] transition-all duration-150 ease-linear"
      >
        <GlareCard className="rounded-xl border-2 border-white hover:scale-125">
          <img
            src={thumbImg}
            className="h-[6rem] w-[6rem] min-w-[6rem] rounded-[10px] object-center transition-all duration-150 ease-linear hover:h-[10rem] hover:w-[10rem] hover:min-w-[10rem] lg:h-[8rem] lg:w-[8rem] lg:min-w-[8rem] lg:hover:h-[13rem] lg:hover:w-[13rem] lg:hover:min-w-[13rem] xl:h-[10rem] xl:w-[10rem] xl:min-w-[10rem] xl:hover:h-[15rem] xl:hover:w-[15rem] xl:hover:min-w-[15rem]"
          />
        </GlareCard>
      </button>
      <AnimatePresence mode="wait">
        {projectOpen && (
          <ProjectModal project={project} closeModal={closeModal} />
        )}
      </AnimatePresence>
    </>
  );
}
export default Project;
