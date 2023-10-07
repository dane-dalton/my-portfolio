import { VscTriangleRight } from "react-icons/vsc";

function RightScrollArrow() {
  return (
    <div className="shadow-centered absolute right-0 top-1/2 animate-pulse rounded-full bg-slate-400 text-slate-200">
      <VscTriangleRight className="h-[96px] w-[96px]" />
    </div>
  );
}

export default RightScrollArrow;
