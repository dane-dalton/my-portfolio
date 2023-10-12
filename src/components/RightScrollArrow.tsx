import { VscTriangleRight } from "react-icons/vsc";
import { Link } from "react-router-dom";
import { pages } from "../constants/pageScrollOptions";

type ScrollArrowProps = {
  pagesIdx: number;
};

function RightScrollArrow({ pagesIdx }: ScrollArrowProps) {
  const nextPageIdx = pagesIdx + 1;
  if (nextPageIdx >= 3) return null;
  const nextPage = pages[nextPageIdx];
  return (
    <>
      <Link
        to={`/${nextPage}`}
        className="absolute right-0 top-1/2 z-20 h-[100px] w-[100px]"
      />
      <div className="bg-slate-400 shadow-centered absolute right-0 top-1/2 animate-bounce rounded-full text-slate-900">
        <VscTriangleRight className="h-[100px] w-[100px]" />
      </div>
    </>
  );
}

export default RightScrollArrow;
