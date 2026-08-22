const CoverCard = ({ id, image, name }) => {

    const handleAlbumCoverClick = () => {

    }

    return(
        <div className="w-40 h-40 sm:w-48 sm:h-48 rounded-lg overflow-hiddn bg-white/10 group">
            <img src="image" alt={name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" onClick={handleAlbumCoverClick}/>
        </div>
    );
};

export default CoverCard;