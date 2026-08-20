import { useState } from "react";
import Sidebar from "../components/Sidebar";
import Searchbox from "../components/Searchbox";
import Home from "../components/Home";
import Albums from "../components/Albums";
import Artists from "../components/Artists";
import Favorites from "../components/Favorites";
import Playlist from "../components/Playlist";
import Songs from "../components/Songs";

const pageComponents = {
  Home: Home,
  Songs: Songs,
  Albums: Albums,
  Artists: Artists,
  Favorites: Favorites,
  Playlist: Playlist,
};

const SIDEBAR_WIDTH = "min(75vw, 400px)";

const Dashboard = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activePage, setActivePage] = useState("Home");

  const ActiveComponent = pageComponents[activePage];

  return (
    <div className="relative min-h-screen bg-black overflow-hidden">

      {/* Hamburger for sidebar opening/closing*/}
      <button className="fixed top-6 left-6 z-50 flex flex-col gap-1 cursor-pointer" onClick={() => setIsOpen(!isOpen)}>
        <div className="w-9 h-1 bg-white" />
        <div className="w-9 h-1 bg-white" />
        <div className="w-9 h-1 bg-white" />
      </button>

      {/* Sidebar */}
      <Sidebar isOpen={isOpen} activePage={activePage} setActivePage={setActivePage} width={SIDEBAR_WIDTH}/>

      {isOpen && (<div className="fixed inset-0 z-30 cursor-pointer" onClick={() => setIsOpen(false)}/>)}

      {/* Content container */}
      <div className="relative min-h-screen transition-all duration-300 ease-in-out" style={{marginLeft: isOpen ? SIDEBAR_WIDTH : "0px", width: isOpen ? `calc(100% - ${SIDEBAR_WIDTH})` : "100%",}}>
        <div className="absolute top-6 right-6 z-20">
          <Searchbox />
        </div>
        <ActiveComponent />
      </div>

    </div>
  );
};

export default Dashboard;