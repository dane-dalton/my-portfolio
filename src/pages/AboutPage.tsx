import { LeftScrollArrow, RightScrollArrow } from "../components";

function AboutPage() {
  const pageIdx = 1;
  return (
    <div className="absolute z-10 flex h-full w-full flex-col items-center">
      <h1 className="stroke-header mt-[1rem] text-center text-[12rem] leading-[12.5rem]">
        About Me
      </h1>
      <LeftScrollArrow pagesIdx={pageIdx} />
      <RightScrollArrow pagesIdx={pageIdx} />
      <section className="mx-[24rem] flex flex-col items-center justify-center gap-4 text-center text-xl text-slate-100">
        <p className="">
          I've come to learn that I enjoy learning. With a background spanning
          Arduino programming, digital circuit design, computer building, CAD,
          GIS, and web development, I am proud to say I've built a strong
          foundation in technology that helps me excel when I am handed a new
          problem or concept.
        </p>
        <p className="">
          Starting my software journey is the best thing I've ever done. Nothing
          makes me more excited than solving a problem that has stumped me. Most
          recently, I found a bug with our ASP.NET connection string that gave
          us some issues with our test deployment. I remember cheering when I
          got the Slack notification that it worked as I drove to get an oil
          change. Moments like these are what I look forward to experiencing for
          the rest of my life as a software developer.
        </p>
        <p className="">
          I am currently looking for a full time software position. I have 1
          year of professional experience with the full life cycle of creating
          and launching the frontend of a new portal for 'Adventures With Mr.
          Math'. With all of the project specs/features and a user base in the
          quadruple digits, I came out the end of this project a different
          developer.
        </p>
      </section>
    </div>
  );
}

export default AboutPage;
