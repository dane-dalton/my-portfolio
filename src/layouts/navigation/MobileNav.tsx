import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { classNames } from "../../utils";

import { List, X } from "@phosphor-icons/react";
import InOut from "../../components/ui/InOut";
import { AnimatePresence } from "framer-motion";

const navigationLinks = [
  {
    id: "home",
    title: "Home",
  },
  {
    id: "about",
    title: "About",
  },
  {
    id: "projects",
    title: "Projects",
  },
];

function MobileNav() {
  const [navOpen, setNavOpen] = useState(false);
  const targetDiv = useRef<any>(null);
  const navigate = useNavigate();

  useEffect(() => {
    if (navOpen) {
      window.addEventListener("mousedown", closeOpenMobileNav);

      return () => {
        window.removeEventListener("mousedown", closeOpenMobileNav);
      };
    }
  }, [navOpen]);

  function closeOpenMobileNav(e: any): void {
    if (targetDiv.current && !targetDiv.current.contains(e.target)) {
      setNavOpen(false);
    }
  }

  return (
    <div className="absolute right-[1rem] top-[1rem] z-30 flex flex-1 items-center justify-end md:hidden">
      <button
        type="button"
        onClick={() => setNavOpen((prev) => !prev)}
        className="text-slate-100"
      >
        {navOpen && (
          <AnimatePresence mode="wait">
            <InOut>
              <X weight="bold" size={48} className="animate-pulse" />
              <div
                ref={targetDiv}
                className={classNames(
                  // navOpen ? "flex" : "hidden",
                  "project-border-shadow absolute -right-3 top-[2.5rem] mx-4 my-2 min-w-[140px] rounded-xl border-2 border-slate-200 bg-slate-900 px-6 pb-1 pt-4",
                )}
                onClick={(e) => e.stopPropagation()}
              >
                <ul className="flex flex-1 list-none flex-col items-center justify-end">
                  {navigationLinks.map((nav) => (
                    <li
                      key={nav.id}
                      className="mb-4 cursor-pointer text-[1.25rem] font-semibold text-slate-100"
                    >
                      {nav.id == "home" ? (
                        <button
                          type="button"
                          onClick={() => {
                            navigate("/");
                            setNavOpen((prev) => !prev);
                          }}
                          className="h-full w-full"
                        >
                          {nav.title}
                        </button>
                      ) : (
                        <button
                          type="button"
                          onClick={() => {
                            navigate(`/${nav.id}`);
                            setNavOpen((prev) => !prev);
                          }}
                          className="h-full w-full"
                        >
                          {nav.title}
                        </button>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            </InOut>
          </AnimatePresence>
        )}
        {!navOpen && (
          <AnimatePresence mode="wait">
            <InOut>
              <List weight="bold" size={48} className="animate-pulse" />
            </InOut>
          </AnimatePresence>
        )}
      </button>
    </div>
  );
}

export default MobileNav;
