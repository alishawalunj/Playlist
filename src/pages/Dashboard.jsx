import { useState } from "react";
import Sidebar from "../components/Sidebar";
import Searchbox from "../components/Searchbox";

const Dashboard = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="min-h-screen bg-black">

            {/* Top section */}
            <div className="flex items-center justify-between p-6">

                {/* Hamburger */}
                <button className="flex flex-col gap-1 cursor-pointer z-50" onClick={() => setIsOpen(!isOpen)}>
                    <div className="w-9 h-1 bg-white" />
                    <div className="w-9 h-1 bg-white" />
                    <div className="w-9 h-1 bg-white" />
                </button>

                {/* Searchbox */}
                <Searchbox />

            </div>

            {/* Sidebar */}
            <Sidebar isOpen={isOpen} />

        </div>
    );
};

export default Dashboard;