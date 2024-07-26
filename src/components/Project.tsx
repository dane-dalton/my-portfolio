import { GlareCard } from "./ui/glare-card";
import { ProjectProps } from "../constants/projectTypes";

function Project({ project }: { project: ProjectProps }) {
  const thumbImg = project.thumbnailImg;

  return (
    <>
      <button
        type="button"
        className="cursor-pointer rounded-3xl bg-[rgba(255,255,255,0.4)] shadow-[0_0_30px_1px_rgba(255,255,255,0.9)] transition-all duration-150 ease-linear"
      >
        <GlareCard>
          <img
            src={thumbImg}
            className="h-[8rem] w-[8rem] min-w-[8rem] rounded-[8px] object-center transition-all duration-150 ease-linear md:h-[10rem] md:w-[10rem] md:min-w-[10rem] lg:h-[12rem] lg:w-[12rem] lg:min-w-[12rem] xl:h-[15rem] xl:w-[15rem] xl:min-w-[15rem]"
          />
        </GlareCard>
      </button>
    </>
  );
}
export default Project;
