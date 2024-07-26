import { cn } from "../../utils/cn";
import React, { useEffect, useState } from "react";
import Project from "../Project";
import { ProjectProps } from "../../constants/projectTypes";

export const InfiniteMovingCards = ({
  projects,
  open,
  handleClickProject,
  direction = "left",
  speed = "fast",
  pauseOnHover = true,
  className,
}: {
  projects: ProjectProps[];
  open: () => void;
  handleClickProject: (proj: ProjectProps) => void;
  direction?: "left" | "right";
  speed?: "fast" | "normal" | "slow";
  pauseOnHover?: boolean;
  className?: string;
}) => {
  const containerRef = React.useRef<HTMLDivElement>(null);
  const scrollerRef = React.useRef<HTMLUListElement>(null);

  useEffect(() => {
    let isMounted = true;
    isMounted && addAnimation();
    return () => {
      isMounted = false;
    };
  }, []);
  const [start, setStart] = useState(false);
  function addAnimation() {
    if (containerRef.current && scrollerRef.current) {
      getDirection();
      getSpeed();
      setStart(true);
    }
  }
  const getDirection = () => {
    if (containerRef.current) {
      if (direction === "left") {
        containerRef.current.style.setProperty(
          "--animation-direction",
          "forwards",
        );
      } else {
        containerRef.current.style.setProperty(
          "--animation-direction",
          "reverse",
        );
      }
    }
  };
  const getSpeed = () => {
    if (containerRef.current) {
      if (speed === "fast") {
        containerRef.current.style.setProperty("--animation-duration", "10s");
      } else if (speed === "normal") {
        containerRef.current.style.setProperty("--animation-duration", "20s");
      } else {
        containerRef.current.style.setProperty("--animation-duration", "40s");
      }
    }
  };
  return (
    <div
      ref={containerRef}
      className={cn(
        "scroller absolute inset-0 z-20 mx-[1rem] h-full max-w-7xl transform-gpu overflow-hidden [mask-image:linear-gradient(to_right,transparent,white_20%,white_80%,transparent)]  sm:mx-[8rem] md:mx-[14rem]",
        className,
      )}
    >
      <ul
        ref={scrollerRef}
        className={cn(
          "flex w-max min-w-full shrink-0 flex-nowrap gap-[0.5rem] py-6 md:gap-[3rem]",
          start && "animate-scroll",
          pauseOnHover && "hover:[animation-play-state:paused]",
        )}
      >
        {projects.map((project) => (
          <li
            className="max-w-full flex-shrink-0 rounded-2xl p-2 md:p-5"
            style={{
              background:
                "linear-gradient(180deg, var(--slate-800), var(--slate-900)",
            }}
            key={project.id + Math.random().toString}
            onClick={() => {
              handleClickProject(project);
              open();
              console.log(projects);
            }}
          >
            <Project project={project} />
          </li>
        ))}
        {projects.map((project) => (
          <li
            className="max-w-full flex-shrink-0 rounded-2xl p-2 md:p-5"
            style={{
              background:
                "linear-gradient(180deg, var(--slate-800), var(--slate-900)",
            }}
            key={project.id + Math.random().toString}
            onClick={() => {
              handleClickProject(project);
              open();
              console.log(projects);
            }}
          >
            <Project project={project} />
          </li>
        ))}
      </ul>
    </div>
  );
};
