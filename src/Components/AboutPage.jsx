import Navbar from './Navbar';
import Html from '../assets/Html.png';
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



function AboutPage() {
    const skills = [
        {
            skillIcon: Html,
            skillName: 'Html'
        },
        {
            skillIcon: Css,
            skillName: 'Css'
        }, {
            skillIcon: Js,
            skillName: 'Javascript'
        }, {
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
            skillIcon: MongoDb,
            skillName: 'MongoDB'
        },
        {
            skillIcon: Git,
            skillName: 'Git'
        },
        {
            skillIcon: Github,
            skillName: 'Github'
        }, {
            skillIcon: Html,
            skillName: 'Postman'
        },
        {
            skillIcon: Vue,
            skillName: 'Vue JS'
        },
        {
            skillIcon: Csharp,
            skillName: 'C#'
        },
        {
            skillIcon: Dotnet,
            skillName: 'Dotnet#'
        },
        {
            skillIcon: Typescript,
            skillName: 'TypeScript'
        },


    ]
    return (

        <div className="bg-[#1E1E1F] min-h-[600px] w-full lg:w-[70%] xl:w-[75%] p-6 rounded-3xl " style={{ position: 'relative' }}>
            <div style={{
                position: 'absolute',
                top: '0px',
                right: '0px',
                backgroundColor: '#282829',
                borderRadius: '0rem 1.5rem 0rem 1.5rem'

            }}> <Navbar /></div>
            <h1 className="text-4xl font-bold mt-8 ">About Me</h1>
            <div className='border-b-4 mt-2 border-[#FEC260] w-[5%]'></div>

            <p className="text-gray-300 leading-relaxed mt-5 font-mono">
                With over a year of experience, I specialize in building scalable and high-performance web applications using modern technologies like React, Vue, Node Js, Dotnet and Tailwind CSS. I bring strong full-stack development skills and a problem-solving mindset to the table. From crafting clean, intuitive UIs to designing efficient backend architectures, I’m passionate about building impactful digital products and continuously refining my craft through learning and innovation.
            </p>
            <h1 className="text-3xl font-bold mt-8 mb-4">What I Work With</h1>
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


    );
}

export default AboutPage;
