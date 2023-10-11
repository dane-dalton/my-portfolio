import {
  ImageBottomRight,
  LeftScrollArrow,
  RightScrollArrow,
} from "../components";

function HomePage() {
  return (
    <>
      <h1 className="mt-8 text-center text-9xl text-white">Welcome!</h1>
      <LeftScrollArrow />
      <RightScrollArrow />
      <ImageBottomRight />
      <section className="mt-10 flex flex-col items-center justify-center gap-10 text-xl">
        <p className="max-w-[500px] text-white">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sapiente,
          doloremque. Reiciendis vel nobis dolorum optio dolore numquam,
          repellat error aut quo similique quia doloremque voluptas id
          repudiandae modi consequatur blanditiis!
        </p>
        <p className="text-white">
          Scroll to learn more about me and my projects.
        </p>
      </section>
    </>
  );
}

export default HomePage;
