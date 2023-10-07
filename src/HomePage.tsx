import { photoOfMe } from "./assets";

function HomePage() {
  return (
    <>
      <h1 className="ml-10 mt-8 text-white underline">Portfolio</h1>
      <div className="absolute -bottom-4 -right-4 h-[384px] w-[384px] overflow-hidden rounded-full bg-white">
        <img src={photoOfMe} alt="Photo of me" />
      </div>
    </>
  );
}

export default HomePage;
