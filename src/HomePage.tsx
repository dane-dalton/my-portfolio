import {
  ImageBottomRight,
  LeftScrollArrow,
  RightScrollArrow,
} from "./components";

function HomePage() {
  return (
    <>
      <h1 className="ml-10 mt-8 text-9xl text-white underline">Portfolio</h1>
      <LeftScrollArrow />
      <RightScrollArrow />
      <ImageBottomRight />
    </>
  );
}

export default HomePage;
