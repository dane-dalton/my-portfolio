import { LeftScrollArrow, RightScrollArrow, PageHeader } from "../components";
import { resumePDF } from "../assets";

function AboutPage() {
  const pageIdx = 1;
  return (
    <div className="absolute z-10 flex h-full w-full flex-col items-center">
      <PageHeader header="About Me" />
      <LeftScrollArrow pagesIdx={pageIdx} />
      <RightScrollArrow pagesIdx={pageIdx} />
      <section className="mx-[24rem] my-8 flex h-full flex-col items-center justify-between gap-4 text-center text-xl text-slate-200">
        <p>
          With a background spanning Arduino programming, digital circuit
          design, computer building, CAD, GIS, and web development, I am proud
          to say I've built a strong foundation in technology that helps me
          excel when I am handed a new problem or concept.
        </p>
        <p>
          Nothing makes me more excited than solving a problem that has stumped
          me. Most recently, I found a bug with our ASP.NET connection string
          that gave us some issues with our test deployment. I remember cheering
          when I received the Slack notification that my solution worked.
          Moments like these are what I look forward to experiencing for the
          rest of my life as a software developer.
        </p>
        <p>
          I am currently looking for a full time software position. Please check
          out my resume below for more information.
        </p>
        <a href={resumePDF} target="_blank">
          <button
            type="button"
            className="stroke-normal project-border-shadow rounded-lg border-2 p-4 transition-all duration-150 ease-linear hover:bg-slate-200"
          >
            Resume
          </button>
        </a>
      </section>
    </div>
  );
}

export default AboutPage;
