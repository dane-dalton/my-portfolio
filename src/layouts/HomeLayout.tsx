import { Outlet } from "react-router-dom";

function HomeLayout() {
  return (
    <div className="isolate h-screen bg-gradient-to-br from-purple-bg-1 via-purple-bg-2 via-45% to-orange-bg-1 mix-blend-multiply">
      <div className="flex h-full w-full items-center justify-center bg-slate-900">
        <div className="absolute inset-8 flex items-center justify-center rounded-3xl bg-white font-bold">
          <div className="absolute inset-4 overflow-hidden rounded-3xl bg-slate-900">
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomeLayout;
