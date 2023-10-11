import { VscTriangleRight } from "react-icons/vsc";

function RightScrollArrow() {
  return (
    <div className="absolute right-0 top-1/2 animate-pulse rounded-full bg-slate-400 text-slate-200 shadow-centered">
      <VscTriangleRight className="h-[100px] w-[100px]" />
    </div>
  );
}

export default RightScrollArrow;
