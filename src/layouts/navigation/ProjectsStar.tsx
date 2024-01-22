import { Link } from "react-router-dom";

function ProjectsStar() {
  return (
    <>
      <div className="star-nav absolute left-[11.5rem] top-[21.5rem] z-10 h-[12px] w-[12px] animate-pulse rounded-full bg-slate-400" />
      <Link
        to={"/projects"}
        className="absolute left-[9.5rem] top-[20.5rem] z-20 h-[4rem] w-[4.7rem] cursor-pointer"
      />
      <p className="stroke-nav absolute left-[9.5rem] top-[22.5rem] z-10 animate-pulse text-xl">
        Projects
      </p>
    </>
  );
}

export default ProjectsStar;
