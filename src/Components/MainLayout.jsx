import Sidebar from './Sidebar';
import { Outlet } from 'react-router-dom';

const MainLayout = () => {
    return (
        <div className="flex flex-col lg:flex-row gap-6 justify-center items-start m-4 mt-6 mb-12 md:mx-4 min-h-screen  text-white" >
            <Sidebar />
            <Outlet />
        </div>
    );
};

export default MainLayout;
