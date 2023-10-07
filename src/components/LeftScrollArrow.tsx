import { VscTriangleLeft } from "react-icons/vsc";

function LeftScrollArrow() {
  return (
    <div className="shadow-centered absolute left-0 top-1/2 animate-pulse rounded-full bg-slate-400 text-slate-200">
      <VscTriangleLeft className="h-[96px] w-[96px]" />
    </div>
  );
}

export default LeftScrollArrow;
