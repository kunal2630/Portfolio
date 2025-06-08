import Navbar from './Navbar';
import ComputerIcon from '@mui/icons-material/Computer';
import StorageIcon from '@mui/icons-material/Storage';
import CloudQueueIcon from '@mui/icons-material/CloudQueue';
import BuildIcon from '@mui/icons-material/Build';

function AboutPage() {

    return (

        <div className="bg-[#1E1E1F] min-h-[600px] w-full lg:w-[70%] xl:w-[75%]  p-6 rounded-3xl " style={{ position: 'relative' }}>
            <div style={{
                position: 'absolute',
                top: '0px',
                right: '0px',
                backgroundColor: '#282829',
                borderRadius: '0rem 1.5rem 0rem 1.5rem'

            }}> <Navbar /></div>
            <h1 className="text-3xl font-bold mt-8 ">About Me</h1>
            <div className='border-b-4 mt-2 border-[#FEC260] w-[5%]'></div>

            <p className="text-gray-300 leading-relaxed mt-5 font-mono">
                With over a year of experience, I specialize in building scalable and high-performance web applications using modern technologies like React, Vue, Node Js, Dotnet and Tailwind CSS. I bring strong full-stack development skills and a problem-solving mindset to the table. From crafting clean, intuitive UIs to designing efficient backend architectures, I’m passionate about building impactful digital products and continuously refining my craft through learning and innovation.
            </p>
            <div className="bg-[#1E1E1F] w-full mb-10  rounded-3xl">
                <h1 className="text-[25px] font-bold mt-8">My Skills</h1>
                <div className='border-b-4 mt-2 border-[#FEC260] w-[5%]'></div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6 text-white font-mono">
                    {/* Frontend */}
                    <div className="bg-[#282829] p-6 rounded-2xl">
                        <h2 className="text-xl font-semibold flex items-center mb-2 text-[#FEBF5F]">
                            <span className="mr-3 flex items-center justify-center"><ComputerIcon /></span> Frontend
                        </h2>
                        <ul className="list-disc list-inside marker:text-[#FEC864] text-gray-300 space-y-1">
                            <li>React.js</li>
                            <li>Vue.js</li>
                            <li>JavaScript</li>
                            <li>TypeScript</li>
                            <li>HTML/CSS</li>
                            <li>Tailwind CSS</li>
                        </ul>
                    </div>

                    {/* Backend */}
                    <div className="bg-[#282829] p-6 rounded-2xl">
                        <h2 className="text-xl font-semibold flex items-center mb-2 text-[#FEBF5F]">
                            <span className="mr-3 flex items-center justify-center"><StorageIcon /></span> Backend
                        </h2>
                        <ul className="list-disc list-inside marker:text-[#FEC864] text-gray-300 space-y-1">
                            <li>Node.js</li>
                            <li>Express.js</li>
                            <li>C# / .NET</li>
                            <li>ServiceStack</li>
                            <li>Hangfire</li>
                        </ul>
                    </div>

                    {/* DevOps */}
                    <div className="bg-[#282829] p-6 rounded-2xl">
                        <h2 className="text-xl font-semibold flex items-center mb-2 text-[#FEBF5F]">
                            <span className="mr-3 flex items-center justify-center"><CloudQueueIcon /></span> DevOps
                        </h2>
                        <ul className="list-disc list-inside marker:text-[#FEC864] text-gray-300 space-y-1">
                            <li>Azure</li>
                        </ul>
                    </div>

                    {/* Other */}
                    <div className="bg-[#282829] p-6 rounded-2xl">
                        <h2 className="text-xl font-semibold flex items-center mb-2 text-[#FEBF5F]">
                            <span className="mr-3 flex items-center justify-center"><BuildIcon /></span> Other
                        </h2>
                        <ul className="list-disc list-inside marker:text-[#FEC864] text-gray-300 space-y-1">
                            <li>Git / GitHub</li>
                            <li>Postman</li>
                            <li>MongoDB</li>
                            <li>Microsoft Azure</li>
                            <li>REST APIs</li>
                        </ul>
                    </div>
                </div>

            </div>


        </div>

    );
}

export default AboutPage;
