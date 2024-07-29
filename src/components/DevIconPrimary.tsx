import { useEffect, useRef } from "react";
import {
  SiAxios,
  SiDocker,
  SiGit,
  SiMicrosoftsqlserver,
  SiMysql,
  SiReact,
  SiTailwindcss,
  SiUbuntu,
} from "react-icons/si";

function DevIconPrimary() {
  const ref1 = useRef<HTMLDivElement>(null);
  const ref2 = useRef<HTMLDivElement>(null);
  const ref3 = useRef<HTMLDivElement>(null);
  const ref4 = useRef<HTMLDivElement>(null);
  const ref5 = useRef<HTMLDivElement>(null);
  const ref6 = useRef<HTMLDivElement>(null);
  const ref7 = useRef<HTMLDivElement>(null);
  const ref8 = useRef<HTMLDivElement>(null);

  const refArr: Array<React.RefObject<HTMLDivElement>> = [
    ref1,
    ref2,
    ref3,
    ref4,
    ref5,
    ref6,
    ref7,
    ref8,
  ];

  useEffect(() => {
    getDegOffset();
  }, []);

  const getDegOffset = () => {
    if (ref1.current) {
      refArr.forEach((el, elIdx) => {
        el.current?.style.setProperty("--start-deg", `${elIdx * -20}deg`);
        el.current?.style.setProperty("--end-deg", `${elIdx * -20 + 360}deg`);
      });
    }
  };

  return (
    <div className="flex gap-4">
      <div ref={ref1} className="animate-rotateIcon text-cyan-500">
        <SiReact />
      </div>
      <div ref={ref2} className="animate-rotateIcon text-blue-200">
        <SiTailwindcss />
      </div>
      <div ref={ref3} className="animate-rotateIcon text-orange-500">
        <SiGit />
      </div>
      <div ref={ref4} className="animate-rotateIcon text-blue-700">
        <SiDocker />
      </div>
      <div ref={ref5} className="animate-rotateIcon text-orange-700">
        <SiUbuntu />
      </div>
      <div ref={ref6} className="animate-rotateIcon text-purple-400">
        <SiAxios />
      </div>
      <div ref={ref7} className="animate-rotateIcon text-orange-300">
        <SiMysql />
      </div>
      <div ref={ref8} className="animate-rotateIcon text-red-600">
        <SiMicrosoftsqlserver />
      </div>
    </div>
  );
}

export default DevIconPrimary;
