import { Link } from "react-router-dom";

function AboutStar() {
  return (
    <>
      <div className="star-nav absolute right-[5.5rem] top-[8.5rem] z-20 h-[12px] w-[12px] animate-pulse rounded-full bg-slate-400" />
      <Link
        to={"/about"}
        className="absolute right-[4.1rem] top-[7.5rem] z-20 h-[4rem] w-[4rem] cursor-pointer"
      />
      <p className="stroke-nav absolute right-[4.2rem] top-[9.5rem] z-10 animate-pulse text-xl">
        About
      </p>
    </>
  );
}

export default AboutStar;
