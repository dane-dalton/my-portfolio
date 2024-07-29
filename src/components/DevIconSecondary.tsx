import { useEffect, useRef } from "react";
import {
  SiArduino,
  SiC,
  SiCsharp,
  SiFramer,
  SiGodotengine,
  SiRuby,
  SiTypescript,
} from "react-icons/si";

function DevIconPrimary() {
  const ref1 = useRef<HTMLDivElement>(null);
  const ref2 = useRef<HTMLDivElement>(null);
  const ref3 = useRef<HTMLDivElement>(null);
  const ref4 = useRef<HTMLDivElement>(null);
  const ref5 = useRef<HTMLDivElement>(null);
  const ref6 = useRef<HTMLDivElement>(null);
  const ref7 = useRef<HTMLDivElement>(null);

  const refArr: Array<React.RefObject<HTMLDivElement>> = [
    ref1,
    ref2,
    ref3,
    ref4,
    ref5,
    ref6,
    ref7,
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
      <div ref={ref1} className="animate-rotateIcon text-blue-500">
        <SiTypescript />
      </div>
      <div ref={ref2} className="animate-rotateIcon text-blue-700">
        <SiC />
      </div>
      <div ref={ref3} className="animate-rotateIcon text-red-500">
        <SiRuby />
      </div>
      <div ref={ref4} className="animate-rotateIcon text-purple-700">
        <SiCsharp />
      </div>
      <div ref={ref5} className="animate-rotateIcon text-blue-400">
        <SiGodotengine />
      </div>
      <div ref={ref6} className="animate-rotateIcon text-slate-200">
        <SiFramer />
      </div>
      <div ref={ref7} className="animate-rotateIcon text-emerald-500">
        <SiArduino />
      </div>
    </div>
  );
}

export default DevIconPrimary;
