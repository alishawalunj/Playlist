const Sidebar = ({ isOpen, activePage, setActivePage, width }) => {
    
  const values = ["Home", "Songs", "Albums", "Artists", "Favorites", "Playlist"];

  return (
    <div className={`fixed top-0 left-0 z-40 h-screen bg-gray-500 transition-transform duration-300 ease-in-out ${isOpen ? "translate-x-0" : "-translate-x-full"}`} style={{ width }}>
      <div className="absolute top-20 left-1/2 w-3/4 -translate-x-1/2 border border-white">
        <div className="flex flex-col gap-4 p-4 text-white">
          {values.map((val) => (
            <div key={val} onClick={() => setActivePage(val)} className={`cursor-pointer ${activePage === val ? "font-bold text-purple-400" : "text-white"}`}>
              {val}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;