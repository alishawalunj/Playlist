const Searchbox = () => {
    return (
        <div className="w-80 h-12 rounded-xl border border-white/20 bg-white/10 backdrop-blur-md shadow-lg">
            <input
                type="text"
                placeholder="Search..."
                className="w-full h-full bg-transparent px-4 text-white outline-none placeholder-white/50"
            />
        </div>
    );
};

export default Searchbox;