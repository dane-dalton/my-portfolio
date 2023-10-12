import { VscTriangleLeft } from "react-icons/vsc";
import { pages } from "../constants/pageScrollOptions";
import { Link } from "react-router-dom";

type ScrollArrowProps = {
  pagesIdx: number;
};

function LeftScrollArrow({ pagesIdx }: ScrollArrowProps) {
  const prevPageIdx = pagesIdx - 1;
  if (prevPageIdx < 0) return null;
  let prevPage = pages[prevPageIdx];
  if (prevPage === "home") {
    prevPage = "";
  }
  return (
    <>
      <Link
        to={`/${prevPage}`}
        className="absolute left-0 top-1/2 z-20 h-[100px] w-[100px]"
      />
      <div className="absolute left-0 top-1/2 animate-pulse rounded-full bg-slate-400 text-slate-200 shadow-centered">
        <VscTriangleLeft className="h-[100px] w-[100px]" />
      </div>
    </>
  );
}

export default LeftScrollArrow;
