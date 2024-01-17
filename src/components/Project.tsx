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
        className="project-border-shadow mt-4 h-[10rem] w-[10rem] cursor-pointer rounded-lg border-2 border-white bg-black transition-all duration-150 ease-linear hover:h-[15rem] hover:w-[15rem]"
      >
        <img
          src={thumbImg}
          className="h-[10rem] w-[10rem] rounded-lg object-center p-1 pb-2 transition-all duration-150 ease-linear hover:h-[15rem] hover:w-[15rem]"
        />
      </div>
      {projectOpen ? (
        <ProjectModal project={project} closeModal={closeModal} />
      ) : null}
    </div>
  );
}
export default Project;
