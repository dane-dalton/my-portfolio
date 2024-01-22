import { useState } from "react";
import ProjectModal from "./ProjectModal";

type ProjectProps = {
  project: {
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
        className="project-border-shadow mt-4 cursor-pointer rounded-xl border-2 border-white bg-black transition-all duration-150 ease-linear"
      >
        <img
          src={thumbImg}
          className="h-[6rem] w-[6rem] min-w-[6rem] rounded-[10px] object-center transition-all duration-150 ease-linear hover:h-[10rem] hover:w-[10rem] hover:min-w-[10rem] lg:h-[8rem] lg:w-[8rem] lg:min-w-[8rem] lg:hover:h-[13rem] lg:hover:w-[13rem] lg:hover:min-w-[13rem] xl:h-[10rem] xl:w-[10rem] xl:min-w-[10rem] xl:hover:h-[15rem] xl:hover:w-[15rem] xl:hover:min-w-[15rem]"
        />
      </button>
      {projectOpen ? (
        <ProjectModal project={project} closeModal={closeModal} />
      ) : null}
    </>
  );
}
export default Project;
