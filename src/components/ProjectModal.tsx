type ProjectProps = {
  project: {
    title: string;
    desc: string;
    thumbnailImg: string;
    skills: string[];
  };
  closeModal: () => void;
};

function ProjectModal({ project, closeModal }: ProjectProps) {
  const title = project.title;
  const desc = project.desc;
  const skills = project.skills;

  return (
    <>
      <div className="fixed inset-0 z-50 flex items-center justify-center overflow-y-auto overflow-x-hidden outline-none focus:outline-none">
        <div className="relative mx-auto my-6 w-auto max-w-md">
          {/*content*/}
          <div className="project-border-shadow relative flex w-full flex-col rounded-lg border-2 border-white bg-slate-900 shadow-lg outline-none focus:outline-none">
            {/*header*/}
            <div className="flex items-center justify-center rounded-t border-b border-solid border-slate-200 p-5">
              <h3 className="stroke-normal text-center text-5xl font-semibold">
                {title}
              </h3>
            </div>
            {/*body*/}
            <div className="mx-8 my-4">
              <div className="mb-4 text-slate-300">
                <h4 className="stroke-normal mb-2 text-3xl">Description: </h4>
                <p className="text-md text-center">{desc}</p>
              </div>
              <div>
                <h4 className="stroke-normal mb-2 text-3xl">Skills: </h4>
                <ol className="grid grid-cols-3 justify-items-center gap-1 text-center text-xl text-slate-200">
                  {skills.map((skill, skillIdx) => (
                    <li key={skillIdx}>{skill}</li>
                  ))}
                </ol>
              </div>
            </div>
            <div></div>
            {/*footer*/}
            <div className="flex items-center justify-center rounded-b border-t border-solid border-slate-200 p-6">
              <button
                className="background-transparent mb-1 mr-1 px-6 py-2 text-sm font-bold uppercase text-red-500 outline-none transition-all duration-75 ease-linear hover:rounded-lg hover:border-2 hover:border-red-500 hover:bg-red-200 hover:shadow-md hover:shadow-gray-400 focus:outline-none"
                type="button"
                onClick={() => closeModal()}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="fixed inset-0 z-40 bg-black opacity-50"></div>
    </>
  );
}

export default ProjectModal;
