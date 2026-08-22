import CardCarousal from "./CardCarousal";

const Home = () => {
    return (
       <div className="min-h-screen w-full bg-black">
            <div className="flex flex-col px-20 pt-15 gap-4">
                <div className="w-180 h-30 border border-white text-white flex items-center justify-center text-6xl font-bold">
                    Good Morning, Alisha
                </div>
                <div className="w-full h-80 border border-white flex flex-col">
                   <CardCarousal  />
                </div>
            </div>
       </div>
    )

}

export default Home;