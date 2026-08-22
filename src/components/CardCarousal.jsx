import React, { useState, useRef, useEffect } from "react";
import { ChevronLeft, ChevronRight, Play } from "lucide-react";
import { songs } from "../data/mockData";

const Row = ({ heading, caption }) => {
    const trackRef = useRef(null);
    const [ canLeft, setCanLeft ] = useState(false);
    const [ canRight, setCanRight ] = useState(true);

    const updateArrows = () => {
        const el = trackRef.current;
        if(!el) return;
        setCanLeft(el.scrollLeft > 4);
        setCanRight(el.scrollLeft + el.clientWidth < el.scrollWidth - 4);
    };

    useEffect(() => {
        updateArrows();
        const el = trackRef.current;
        if(!el) return;
        el.addEventListener("scroll", updateArrows, { passive: true });
        window.addEventListener("resize", updateArrows);
        return () => {
            el.removeEventListener("scroll", updateArrows);
            window.removeEventListener("resize", updateArrows);
        }
    }, []);

    const scrollBy = (dir) => {
        const el = trackRef.current;
        if (!el) return;
        const amount = el.clientWidth * 0.85 * dir;
        el.scrollBy({ left: amount, behavior: "smooth" });
    };

    return(
        <section className="relative mb-10">
            {/* top side */}
            <div className="flex items-end justify-between mb-4 px-1">
                {/* left side */}
                <div>
                    <h2 className="text-xl font-bold text-white tracking-tight">{heading}</h2>
                    {caption && <p className="text-sm text-neutral-400 mt-0.5">{caption}</p>}
                </div>
                {/* right side  scrolling buttons*/}
                <div className="hidden sm:flex gap-2">
                    <button onClick={() => scrollBy(-1)} disabled={!canLeft} aria-label="Scroll left"
                    className="w-8 h-8 rounded-full bg-neutral-800 flex items-center justify-center text-white disabled:opacity-30 disabled:cursor-not-allowed hover:bg-neutral-700 hover:scale-105 active:scale-95 transition">
                        <ChevronLeft size={18} />
                    </button>
                    <button onClick={() => scrollBy(1)} disabled={!canRight} aria-label="Scroll Right"
                    className="w-8 h-8 rounded-full bg-neutral-800 flex items-center justify-center text-white disabled:opacity-30 disabled:cursor-not-allowed hover:bg-neutral-700 hover:scale-105 active:scale-95 transition">
                        <ChevronRight size={18} />
                    </button>
                </div>
            </div>

            <div className="pointer-events-none absolute left-0 top-11 bottom-0 w-6 bg-gradient-to-r from-neutral-950 to-transparent z-10 hidden sm:block" />
            <div className="pointer-events-none absolute right-0 top-11 bottom-0 w-6 bg-gradient-to-l from-neutral-950 to-transparent z-10 hidden sm:block" />

            <div ref={trackRef} className="flex gap-4 overflow-x-auto pb-2 px-1 scroll-smooth snap-x snap-mandatory [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
                {songs.map((song) => (
                    <div key={song.id} className="group relative flex-none w-40 sm:w-44 snap-start cursor-pointer">
                        <div className={`relative w-40 h-40 sm:w-44 sm:h-44 rounded-lg bg-gradient-to-br from-amber-500 to-orange-700 overflow-hidden shadow-lg`}>
                            <div className="absolute inset-0 bg-black/10 group-hover:bg-black/30 transition-colors" />
                            <button aria-label={`Play ${song.title}`} className="absolute bottom-2 right-2 w-10 h-10 rounded-full bg-green-500 text-black flex items-center justify-center opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all shadow-xl hover:scale-105 active:scale-95">
                                <Play size={18} fill="black" />
                            </button>
                        </div>
                        <p className="mt-2 text-sm font-semibold text-white truncate">{song.title}</p>
                        <p className="text-xs text-neutral-400 truncate">{song.description}</p>
                    </div>
                ))}
            </div>
        </section>
    );
};


const CardCarousal = () => {
    return (
        <div className="h-full bg-neutral-950 px-4 sma:px-8 py-8">
            <Row heading="Recently Played Songs"  />
        </div>
    );
};

export default CardCarousal;