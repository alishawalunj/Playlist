import { Play, MoreVertical } from "lucide-react";
import CardCarousal from "./CardCarousal";
import { songs, albums, artists } from "../data/mockData";

const Home = () => {
    return (
        <div className="min-h-screen w-full bg-black">
            <div className="flex flex-col px-20 pt-15 gap-10">
                <div>
                    <h1 className="text-5xl font-bold text-white">
                        Good Morning
                    </h1>

                    <p className="text-neutral-400 mt-2">
                        Listen to something you love
                    </p>
                </div>
                <CardCarousal />
                <section>
                    <div className="flex items-center justify-between mb-4 px-1">
                        <h2 className="text-xl font-bold text-white">
                            Favorites
                        </h2>

                        <button className="text-sm text-neutral-400 hover:text-white">
                            See all
                        </button>
                    </div>

                    <div className="flex flex-col">
                        {songs.slice(0, 5).map((song) => (
                            <FavoriteSong
                                key={song.id}
                                song={song}
                            />
                        ))}
                    </div>
                </section>

            </div>
        </div>
    );
};


const FavoriteSong = ({ song }) => {

    const album = albums.find(
        (album) => album.id === song.albumId
    );

    const artist = artists.find(
        (artist) => artist.id === song.artistId
    );

    return (
        <div className="group grid grid-cols-[40px_1fr_1fr_150px_80px_40px] items-center gap-4 px-4 py-3 rounded-lg hover:bg-neutral-900 transition">
            <button className="w-8 h-8 rounded-full flex items-center justify-center text-neutral-400 hover:text-white hover:bg-neutral-800" aria-label={`Play ${song.title}`}>
                <Play size={16} fill="currentColor" />
            </button>

            <div className="min-w-0">
                <p className="text-white font-medium truncate">
                    {song.title}
                </p>

                <p className="text-xs text-neutral-500 truncate">
                    {artist?.name}
                </p>
            </div>

            <div className="min-w-0">
                <p className="text-neutral-400 text-sm truncate">
                    {album?.title}
                </p>
            </div>

            <div className="min-w-0">
                <p className="text-neutral-400 text-sm truncate">
                    {song.genre}
                </p>
            </div>

            <div>
                <p className="text-neutral-400 text-sm">
                    {formatDuration(song.duration)}
                </p>
            </div>

            <button className="text-neutral-500 hover:text-white opacity-0 group-hover:opacity-100 transition" aria-label={`More options for ${song.title}`}>
                <MoreVertical size={20} />
            </button>

        </div>
    );
};


const formatDuration = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;

    return `${minutes}:${remainingSeconds
        .toString()
        .padStart(2, "0")}`;
};


export default Home;