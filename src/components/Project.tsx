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
    <div className="flex flex-col items-center justify-center">
      {/* <h2 className="stroke-normal text-center text-3xl">{title}</h2> */}
      <div
        onClick={() => setProjectOpen(true)}
        className="project-border-shadow xxs:h-[6rem] xxs:w-[6rem] mt-4 cursor-pointer rounded-lg border-2 border-white bg-black transition-all duration-150 ease-linear lg:h-[8rem] lg:w-[8rem] lg:hover:h-[13rem] lg:hover:w-[13rem] xl:h-[10rem] xl:w-[10rem] xl:hover:h-[15rem] xl:hover:w-[15rem]"
      >
        <img
          src={thumbImg}
          className="xxs:h-[6rem] xxs:w-[6rem] rounded-lg object-center p-1 pb-2 transition-all duration-150 ease-linear lg:h-[8rem] lg:w-[8rem] lg:hover:h-[13rem] lg:hover:w-[13rem] xl:h-[10rem] xl:w-[10rem] xl:hover:h-[15rem] xl:hover:w-[15rem]"
        />
      </div>
      {projectOpen ? (
        <ProjectModal project={project} closeModal={closeModal} />
      ) : null}
    </div>
  );
}
export default Project;
