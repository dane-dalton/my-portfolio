import { VscTriangleLeft } from "react-icons/vsc";

function LeftScrollArrow() {
  return (
    <div className="absolute left-0 top-1/2 animate-pulse rounded-full bg-slate-400 text-slate-200 shadow-centered">
      <VscTriangleLeft className="h-[100px] w-[100px]" />
    </div>
  );
}

export default LeftScrollArrow;
