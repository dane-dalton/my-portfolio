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
        <div className="relative mx-auto my-6 w-auto max-w-sm">
          {/*content*/}
          <div className="relative flex w-full flex-col rounded-lg border-0 bg-white shadow-lg outline-none focus:outline-none">
            {/*header*/}
            <div className="flex items-start justify-between rounded-t border-b border-solid border-slate-200 p-5">
              <h3 className="text-3xl font-semibold">{title}</h3>
              <button
                className="float-right ml-auto border-0 bg-transparent p-1 text-3xl font-semibold leading-none text-black opacity-5 outline-none focus:outline-none"
                onClick={() => closeModal()}
              >
                <span className="block h-6 w-6 bg-transparent text-2xl text-black opacity-5 outline-none focus:outline-none">
                  ×
                </span>
              </button>
            </div>
            {/*body*/}
            <div>
              <div>
                <h4>Description: </h4>
                <p>{desc}</p>
              </div>
              <div>
                <h4>Skills: </h4>
                <ol>
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
                className="background-transparent mb-1 mr-1 px-6 py-2 text-sm font-bold uppercase text-red-500 outline-none transition-all duration-75 ease-linear hover:rounded-lg hover:border-2 hover:border-red-500 hover:bg-red-100 hover:shadow-md hover:shadow-gray-400 focus:outline-none"
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
