import Navbar from "./Navbar";
import eatsProjectCover from '../assets/eatsprojectcover.png';
import flickoprojectcover from '../assets/flickoprojectcover.png';

const projects = [
    {
        title: "Eatss",
        tech: "HTML, React.js, Javascript, Tailwind CSS",
        imageUrl: eatsProjectCover,
        link: "https://eatss.netlify.app/"
    },
    {
        title: "Flicko",
        tech: "HTML, React.js, Javascript, Firebase, Tailwind CSS,Node.js, Express.js, MongoDB",
        imageUrl: flickoprojectcover,
        link: "https://flickomovie.netlify.app/"
    },
];

function ProjectPage() {
    return (
        <>
            <div className="bg-[#1E1E1F] min-h-[600px] w-full lg:w-[70%] xl:w-[75%] p-6 rounded-3xl" style={{ position: 'relative' }}>
                <div style={{
                    position: 'absolute',
                    top: '0px',
                    right: '0px',
                    backgroundColor: '#282829',
                    borderRadius: '0rem 1.5rem 0rem 1.5rem'
                }}>
                    <Navbar />
                </div>

                <h1 className="text-3xl font-bold mt-8 text-white">Projects</h1>
                <div className='border-b-4 mt-2 border-[#FEC864] w-[5%]'></div>

                {/* Project Section */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 mt-10">
                    {projects.map((project, index) => (
                        <div
                            key={index}
                            className="bg-[#2E2E30] rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-transform transform hover:scale-95 hover:brightness-110 cursor-pointer duration-300"
                            onClick={() => window.open(project.link, '_blank')}
                        >
                            <img
                                src={project.imageUrl}
                                alt={project.title}
                                className="w-full object-cover"
                            />
                            <div className="p-4 text-white">
                                <h2 className="text-xl font-semibold mb-2">{project.title}</h2>
                                <p className="text-md text-gray-300">
                                    <span className=" text-lg text-[#979798]">Technologies:</span> {project.tech}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </>
    );
}

export default ProjectPage;
