import { Link } from "react-router-dom";

function HomeStar() {
  return (
    <>
      <div className="star-nav absolute left-[2.5rem] top-[26.5rem] z-20 h-[12px] w-[12px] animate-pulse rounded-full bg-slate-400" />
      <Link
        to={"/"}
        className="absolute left-[1.2rem] top-[25.5rem] z-20 h-[4rem] w-[4rem] cursor-pointer"
      />
      <p className="stroke-nav absolute left-[1.3rem] top-[27.5rem] z-10 animate-pulse text-xl">
        Home
      </p>
    </>
  );
}

export default HomeStar;
