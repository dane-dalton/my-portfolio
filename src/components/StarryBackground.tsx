import { Link } from "react-router-dom";
import usePageIdx from "../hooks/usePageIdx";

function StarryBackground() {
  const { pageIdx } = usePageIdx();

  const onHomePage = () => {
    return pageIdx === 0;
  };
  const onAboutPage = () => {
    return pageIdx === 1;
  };
  const onProjectsPage = () => {
    return pageIdx === 2;
  };

  return (
    <div className="absolute z-10 h-full w-full">
      <div className="sky-shadow-violet-2 absolute left-[12rem] top-[15rem]" />
      <div className="sky-shadow-blue absolute left-[6rem] top-[25rem]" />
      <div className="sky-shadow-violet-3 absolute left-[20rem] top-[2rem]" />
      <div className="sky-shadow-violet absolute left-[2rem] top-[2rem]" />
      <div className="star absolute left-[3rem] top-[27rem]" />
      <div className="star absolute left-[10rem] top-[30rem]" />
      <div className="star absolute left-[7rem] top-[19rem]" />
      <div className="star absolute left-[12rem] top-[22rem]" />
      <div className="star absolute left-[10rem] top-[11rem]" />
      <div className="star absolute left-[16rem] top-[6rem]" />
      <div className="star absolute left-[25rem] top-[3rem]" />

      <div className="sky-shadow-blue absolute right-[5rem] top-[3rem]" />
      <div className="star absolute right-[9rem] top-[4rem]" />
      <div className="star absolute right-[5rem] top-[3rem]" />
      <div className="star absolute right-[6rem] top-[9rem]" />

      {onHomePage() && (
        <>
          <div className="star-nav absolute right-[5.5rem] top-[8.5rem] h-[12px] w-[12px] animate-pulse rounded-full bg-slate-400" />
          <Link to={"/about"}>
            <p className="stroke-nav absolute right-[70px] top-[9.5rem] z-10 animate-pulse text-xl">
              About
            </p>
          </Link>
        </>
      )}
      {onAboutPage() && <></>}
      {onProjectsPage() && <></>}
    </div>
  );
}

export default StarryBackground;
