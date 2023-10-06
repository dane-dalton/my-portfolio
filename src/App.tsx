// import Header from "./Header";
import { photoOfMe } from "./assets";
import "./index.css";

function App() {
  return (
    <>
      <div className="isolate h-screen bg-gradient-to-br from-purple-bg-1 via-purple-bg-2 via-45% to-orange-bg-1 mix-blend-multiply">
        <div className="flex h-full w-full items-center justify-center bg-slate-900">
          <div className="absolute inset-8 flex items-center justify-center rounded-3xl bg-white text-9xl font-bold">
            <div className="absolute inset-4 overflow-hidden rounded-3xl bg-slate-900">
              <h1 className="ml-10 mt-8 text-white underline">Portfolio</h1>
              <div className="absolute -bottom-4 -right-4 h-[384px] w-[384px] overflow-hidden rounded-full bg-white">
                <img src={photoOfMe} alt="Photo of me" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
