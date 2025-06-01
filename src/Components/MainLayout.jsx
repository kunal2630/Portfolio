import Sidebar from './Sidebar';
import { Outlet } from 'react-router-dom';

const MainLayout = () => {
    return (
        <div className="min-h-screen  text-white px-4 py-4 ">
            <div className="flex flex-col lg:flex-row gap-6 justify-center items-start  mx-4">
                <Sidebar />
                <Outlet />
            </div>
        </div>
    );
};

export default MainLayout;
