import SideChip from "./SideChip";
import ProfileLogo from '../assets/ProfileLogo.png';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIphoneIcon from '@mui/icons-material/PhoneIphone';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';


function Sidebar() {
    return (
        <div className="flex flex-col p-4 lg:p-6 bg-[#1E1E1F] rounded-2xl w-full lg:w-[30%] xl:w-[25%] xl:items-center items-start overflow-hidden">
            <div className='flex lg:w-[80%] justify-center items-center lg:mx-auto lg:flex-col flex-row gap-5 lg:gap-0'>
                {/* Profile Image */}
                <div className=" rounded-full bg-[#333333] flex justify-center items-center">
                    <img
                        src={ProfileLogo}
                        className="py-2  w-[120px] rounded-full object-cover"
                        alt="Profile"
                    />
                </div>
                <div className="flex flex-col justify-center items-center px-2">
                    {/* Name and Title */}
                    <h1 className="text-3xl lg:mt-6 font-bold text-center">Kishlay Kunal</h1>
                    <h2 className="text-md sm:text-lg mt-4 text-[#FEBF5F] bg-[#333333] rounded-3xl text-center  py-2 px-4">
                        Software Engineer
                    </h2>
                </div>
            </div>
            {/* Divider */}
            <div className="my-4 border-t border-gray-500 w-[95%]"></div>
            {/* Contact Info */}
            <div className="w-full flex flex-col gap-2">
                <SideChip icon={<PhoneIphoneIcon />} title="Phone" description="+91 6378498748" isHyperLink={false} />
                <SideChip icon={<EmailIcon />} title="Email" description="kunalk2630@gmail.com" isHyperLink={true} />
                <SideChip icon={<GitHubIcon />} title="Github" description="https://github.com/kunal2630" isHyperLink={true} />
                <SideChip icon={<LinkedInIcon />} title="LinkedIn" description="https://www.linkedin.com/in/kishlay-kunal-k/" isHyperLink={true} />
            </div>
        </div>

    )
}
export default Sidebar;