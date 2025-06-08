import WorkIcon from '@mui/icons-material/Work';
import ImportContactsIcon from '@mui/icons-material/ImportContacts';
import Navbar from './Navbar';
import Html from '../assets/html.png';
import Css from '../assets/css.png'
import Js from '../assets/js.png'
import Express from '../assets/express.png'
import MongoDb from '../assets/mongodb.png'
import NodeJs from '../assets/nodejs.png'
import Typescript from '../assets/typescript.png'
import React from '../assets/react.png'
import Tailwind from '../assets/tailwind.png'
import Git from '../assets/git.png'
import Vue from '../assets/vue.png'
import Github from '../assets/github.png'
import Csharp from '../assets/csharp.png'
import Dotnet from '../assets/dotnet.png'
import Azure from '../assets/azure.png'
import Hangfire from '../assets/hangfire.png'
import ServiceStack from '../assets/serviceStack.png'
import Postman from '../assets/postman.png'

function ResumePage() {
    const skills = [

        {
            skillIcon: Git,
            skillName: 'Git'
        },
        {
            skillIcon: Github,
            skillName: 'Github'
        },
        {
            skillIcon: Css,
            skillName: 'Css'
        },
        {
            skillIcon: Postman,
            skillName: 'Postman'
        },
        {
            skillIcon: Html,
            skillName: 'Html'
        },
        {
            skillIcon: Js,
            skillName: 'Javascript'
        },
        {
            skillIcon: Vue,
            skillName: 'Vue JS'
        },
        {
            skillIcon: Dotnet,
            skillName: 'Dotnet#'
        },
        {
            skillIcon: Csharp,
            skillName: 'C#'
        },
        {
            skillIcon: ServiceStack,
            skillName: 'ServiceStack'
        },
        {
            skillIcon: NodeJs,
            skillName: 'Node JS'
        }, {
            skillIcon: Express,
            skillName: 'Express JS'
        }, {
            skillIcon: React,
            skillName: 'React JS'
        }, {
            skillIcon: Tailwind,
            skillName: 'Tailwind CSS'
        },
        {
            skillIcon: Typescript,
            skillName: 'TypeScript'
        },
        {
            skillIcon: MongoDb,
            skillName: 'MongoDB'
        },

        {
            skillIcon: Azure,
            skillName: 'Microsoft Azure'
        },
        {
            skillIcon: Hangfire,
            skillName: 'Hangfire Jobs'
        },

    ]
    return (
        <>
            <div className="bg-[#1E1E1F] min-h-[600px] w-full lg:w-[70%] xl:w-[75%] p-6  rounded-3xl" style={{ position: 'relative' }}>
                <div style={{
                    position: 'absolute',
                    top: '0px',
                    right: '0px',
                    backgroundColor: '#282829',
                    borderRadius: '0rem 1.5rem 0rem 1.5rem'

                }}> <Navbar /></div>

                <h1 className="text-3xl font-bold mt-8 ">Resume</h1>
                <div className='border-b-4 mt-2 border-[#FEC864] w-[5%]'></div>
                <div className="mt-10">
                    <h2 className="text-3xl font-bold text-white mb-6 flex items-center gap-3">
                        <div className="flex items-center my-2 gap-2">
                            {/* Icon container */}
                            <div className="w-10 h-10 p-5 shadow-2xl rounded-lg  bg-[#2e2e2e] flex items-center justify-center mr-3 text-[#FEC864]">
                                <WorkIcon />
                            </div>

                            {/* Text container */}
                            <div className="flex flex-col min-w-0 justify-center items-center">
                                <h1 className="text-2xl">
                                    Experience
                                </h1>
                            </div>
                        </div>
                    </h2>

                    <div className="relative pl-7">

                        {/* Short Vertical Line to next dot */}
                        <div className="absolute left-[20px] -top-10 w-[2px] h-16 bg-[#2e2e2e]" />

                        <div className="relative">
                            {/* Dot with circular border */}
                            <div className="absolute -left-[17px] top-2 flex items-center justify-center w-5 h-5 rounded-full shadow-black bg-[#2e2e2e]">
                                <div className="w-2 h-2 rounded-full bg-[#FEC864] shadow-[0_0_1px_1px_#FEC864]" />
                            </div>

                            {/* Experience Content */}
                            <div className="ml-10">
                                <h2 className="text-white font-bold text-lg sm:text-md ">Full Stack Developer - Artesian Software Technologies </h2>
                                <p className="text-[#FEC864] text-lg md:text-sm mt-2 mb-1">March, 2024 — Present</p>
                                <ul className="list-disc list-inside text-gray-300 mt-3 md:mt-2 space-y-1 text-md md:text-sm">
                                    <li className="mt-3 md:mt-1">Delivered end-to-end Payroc payment integration across UI, backend, Hangfire jobs, and reconciliation.</li>
                                    <li className="mt-3 md:mt-1">Migrated legacy Azure WebJobs to Hangfire, enhancing scalability and reliability.</li>
                                    <li className="mt-3 md:mt-1">Built reusable UI components like File Uploader, Payment Modules etc. streamlining development.</li>
                                    <li className="mt-3 md:mt-1">Integrated Authorize.Net for secure and compliant payment processing.</li>
                                    <li className="mt-3 md:mt-1">Created an AI-powered IVR Bot using Twilio and ChatGPT for automated appointment booking.</li>
                                </ul>
                            </div>

                            {/* Short Vertical Line to next dot */}
                            <div className="absolute -left-[7px] top-6 w-[2px] h-72 sm:h-64 md:h-44 lg:h-40 xl:h-36 bg-[#2e2e2e]" />


                        </div>

                    </div>

                </div>
                <div className="mt-10">
                    <h2 className="text-3xl font-bold text-white mb-6 flex items-center gap-3">
                        <div className="flex items-center my-2 gap-2">
                            {/* Icon container */}
                            <div className="w-10 h-10 p-5 shadow-2xl rounded-lg  bg-[#2e2e2e] flex items-center justify-center mr-3 text-[#FEC864]">
                                <ImportContactsIcon />
                            </div>

                            {/* Text container */}
                            <div className="flex flex-col min-w-0">
                                <h1 className="text-2xl  m-0">
                                    Education
                                </h1>
                            </div>
                        </div>
                    </h2>

                    <div className="relative pl-7">

                        {/* Short Vertical Line to next dot */}
                        <div className="absolute left-[20px] -top-10 w-[2px] h-16 bg-[#2e2e2e]" />

                        <div className="relative">
                            {/* Dot with circular border */}
                            <div className="absolute -left-[17px] top-2 flex items-center justify-center w-5 h-5 rounded-full shadow-black bg-[#2e2e2e]">
                                <div className="w-2 h-2 rounded-full bg-[#FEC864] shadow-[0_0_1px_1px_#FEC864]" />
                            </div>

                            {/* Experience Content */}
                            <div className="ml-10">
                                <h2 className="text-white font-bold text-lg">Chandigarh University</h2>
                                <p className="text-[#FEC864] text-sm mt-1">2020-2024</p>
                                <ul className="list-disc list-inside text-gray-300 mt-2 space-y-1">
                                    <p>Bachelor of Technology in Computer Science and Engineering</p>
                                </ul>
                            </div>

                            {/* Short Vertical Line to next dot */}
                            <div className="absolute -left-[8px] top-6 w-[2px] h-28 bg-[#2e2e2e]" />

                        </div>

                    </div>
                    <div className="relative pl-7">
                        <div className="relative">
                            {/* Dot with circular border */}
                            <div className="absolute -left-[17px] top-2 flex items-center justify-center w-5 h-5 rounded-full shadow-black bg-[#2e2e2e]">
                                <div className="w-2 h-2 rounded-full bg-[#FEC864] shadow-[0_0_1px_1px_#FEC864]" />
                            </div>

                            {/* Experience Content */}
                            <div className="ml-10 mt-8">
                                <h2 className="text-white font-bold text-lg">Sarvodaya Sr. Seconodary School</h2>
                                <p className="text-[#FEC864] text-sm mt-1">2017-2019</p>
                                <ul className="list-disc list-inside text-gray-300 mt-2 space-y-1">
                                    <p>Senior Secondary Education in PCM</p>
                                </ul>
                            </div>

                            {/* Short Vertical Line to next dot */}
                            <div className="absolute -left-[7px] top-6 w-[2px] h-12 bg-[#2e2e2e]" />

                        </div>

                    </div>
                </div>
                <h1 className="text-2xl font-bold mt-8 mb-4">What I Work With</h1>
                <div className="flex flex-wrap mt-5">
                    {skills.map((skill, index) => (
                        <div
                            key={index}
                            className="flex items-center px-4 py-2 bg-[#F3E8D4] m-2 mb-1 rounded-lg text-sm shadow-sm"
                        >
                            <div className="flex items-center justify-center">
                                <img src={skill.skillIcon} alt={skill.skillName} className="w-5 h-5 object-contain" />
                            </div>
                            <div className="ml-2 font-semibold leading-relaxed text-[#383836]">{skill.skillName}</div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
}
export default ResumePage;