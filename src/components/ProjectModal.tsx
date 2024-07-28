import { motion } from "framer-motion";

type ProjectProps = {
  project: {
    id: string;
    title: string;
    desc: string;
    thumbnailImg: string;
    skills: string[];
  } | null;
  closeModal: () => void;
};

const dropIn = {
  hidden: {
    y: "-100vh",
    opacity: 0,
  },
  visible: {
    y: "0",
    opacity: 1,
    transition: {
      duration: 0.1,
      type: "spring",
      damping: 25,
      stiffness: 500,
    },
  },
  exit: {
    y: "100vh",
    opacity: 0,
  },
};

function ProjectModal({ project, closeModal }: ProjectProps) {
  const title = project?.title;
  const desc = project?.desc;
  const skills = project?.skills;

  return (
    <>
      <motion.div
        onClick={(e) => {
          e.stopPropagation();
          closeModal();
        }}
        className="absolute inset-0 z-40 flex items-center justify-center"
        initial={{ backgroundColor: "rgba(0,0,0,0)" }}
        animate={{ backgroundColor: "rgba(0,0,0,0.7)" }}
        exit={{ backgroundColor: "rgba(0,0,0,0)" }}
        transition={{ duration: 1 }}
      >
        <motion.div
          onClick={(e) => e.stopPropagation()}
          className="absolute z-50 flex items-center justify-center opacity-100 outline-none focus:outline-none"
          variants={dropIn}
          initial="hidden"
          animate="visible"
          exit="exit"
        >
          <div className="project-border-shadow relative w-[100%] rounded-lg border border-white sm:w-[75%] lg:w-[50%]">
            {/*content*/}
            <div className="relative flex flex-col rounded-lg bg-slate-900 outline-none focus:outline-none">
              {/*header*/}
              <div className="flex items-center justify-center rounded-t border-b border-solid border-slate-200 p-5">
                <h3 className="text-center text-5xl font-semibold text-orange-400">
                  {title}
                </h3>
              </div>
              {/*body*/}
              <div className="mx-2 mt-2 text-slate-300 md:mx-8">
                <div className="mb-2">
                  <h4 className="my-2 text-3xl text-orange-500">
                    Description:{" "}
                  </h4>
                  <p className="text-md text-center lg:text-lg">{desc}</p>
                </div>
                <div className="mb-4">
                  <h4 className="my-2 text-3xl text-orange-500">Skills: </h4>
                  <ol className="grid grid-cols-3 place-items-center gap-1 text-center text-base text-purple-300 sm:text-lg md:text-xl">
                    {skills?.map((skill, skillIdx) => (
                      <li key={skillIdx} className="list-disc">
                        {skill}
                      </li>
                    ))}
                  </ol>
                </div>
              </div>
              <div></div>
              {/*footer*/}
              <div className="flex items-center justify-center rounded-b border-t border-solid border-slate-200 p-6">
                <button
                  className="mb-1 mr-1 rounded-lg px-6 py-2 text-sm font-bold uppercase text-red-500 transition-all duration-75 ease-linear hover:border-2 hover:border-red-500 hover:bg-red-200 hover:shadow-md hover:shadow-gray-400"
                  type="button"
                  onClick={() => closeModal()}
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </>
  );
}

export default ProjectModal;
