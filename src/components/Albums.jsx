import { albums, songs } from "../data/mockData";
import CoverCard from "./CoverCard";
import { Navigate, useNavigate } from "react-router-dom";


const Albums = () => {

    const navigate = useNavigate();

    const handleAlbumClick = () => navigate('/album/`${')

    return (
        <div className="w-full min-h-screen bg-red-400 flex flex-col">
            <div className="p-6 pt-24 text-white">
                <h1>This is Albums Section</h1>
            </div>   
            <div className="px-3 w-full flex justify-center">
                <div style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
                    gap: "40px",
                    justifyItems: "center",
                    width: "100%",
                    maxWidth: "1400px",
                }} onClick={handleAlbumClick}>
                    {albums.map((album) => (
                        <CoverCard key={album.id} image={album.image} name={album.title} />
                    ))}
                </div>
            </div>   
        </div>
    );
};

export default Albums;