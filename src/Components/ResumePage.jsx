import Navbar from "./Navbar";
import WorkIcon from '@mui/icons-material/Work';
import ImportContactsIcon from '@mui/icons-material/ImportContacts';

function ResumePage() {
    return (
        <>
            <div className="bg-[#1E1E1F] min-h-[600px] w-full lg:w-[70%] xl:w-[75%] p-6 rounded-3xl" style={{ position: 'relative' }}>
                <div style={{
                    position: 'absolute',
                    top: '0px',
                    right: '0px',
                    backgroundColor: '#282829',
                    borderRadius: '0rem 1.5rem 0rem 1.5rem'

                }}> <Navbar /></div>
                <h1 className="text-4xl font-bold mt-8 ">Resume</h1>
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
                                <h1 className="text-3xl">
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
                                <h2 className="text-white font-bold text-lg">Member Technical Staff - Zoho Corporation Pvt. Ltd.</h2>
                                <p className="text-[#FEC864] text-sm mt-1">Dec, 2022 — Mar, 2025</p>
                                <ul className="list-disc list-inside text-gray-300 mt-2 space-y-1">
                                    <li>Integrated products with Dark Web and Botnet Data Leak monitoring.</li>
                                    <li>Implemented automatic configuration of Windows devices.</li>
                                    <li>Enhanced product functionality by integrating Webroot API.</li>
                                    <li>Addressed and resolved various bugs in cloud/on-premises products.</li>
                                </ul>
                            </div>

                            {/* Short Vertical Line to next dot */}
                            <div className="absolute -left-[7px] top-6 w-[2px] h-24 bg-[#2e2e2e]" />

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
                                <h1 className="text-3xl  m-0">
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
            </div>
        </>
    );
}
export default ResumePage;