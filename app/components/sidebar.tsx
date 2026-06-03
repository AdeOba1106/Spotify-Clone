import { Link, Plus, } from "lucide-react";
import Image from "next/image";
export default function sidebar() {
    const songs = [
        {
            id: 1,
            title: "Reckless Lover",
            artist: "Artist",
            image: "/images/cover-10.jpeg",
        },
        {
            id: 2,
            title: "Endless Praise",
            artist: "Artist",
            image: "/images/cover-11.jpeg",
        },
        {
            id: 3,
            title: "Korin Iyin",
            artist: "Artist",
            image: "/images/cover-4.jpeg",
        },
        {
            id: 4,
            title: "Gbogbonise",
            artist: "Artist",
            image: "/images/cover-1.jpeg",
        },
        {
            id: 5,
            title: "I have Escaped",
            artist: "Artist",
            image: "/images/cover-2.jpeg",
        },
        {
            id: 6,
            title: "Unreserved Praise",
            artist: "Artist",
            image: "/images/cover-3.jpeg",
        },
        {
            id: 7,
            title: "Odudu Live",
            artist: "Artist",
            image: "/images/cover-1.jpeg",
        },
        {
            id: 8,
            title: "Amen live",
            artist: "Artist",
            image: "/images/cover-4.jpeg",
        },
        {
            id: 9,
            title: "Jugular Jugular",
            artist: "Artist",
            image: "/images/cover-11.jpeg",
        },
        {
            id: 10,
            title: "June Celebrants",
            artist: "Artist",
            image: "/images/cover-2.jpeg",
        },
    ];



    const playlists = [
        {
            id: 4,
            title: "Gbogbonise",
            artist: "Artist",
            image: "/images/cover-1.jpeg",
        },
        {
            id: 11,
            title: "I have Escaped",
            artist: "Artist",
            image: "/images/cover-2.jpeg",
        },
        {
            id: 20,
            title: "Unreserved Praise",
            artist: "Artist",
            image: "/images/cover-3.jpeg",
        },
        {
            id: 17,
            title: "Odudu Live",
            artist: "Artist",
            image: "/images/cover-1.jpeg",
        }, {
            id: 12,
            title: "I have Escaped",
            artist: "Artist",
            image: "/images/cover-2.jpeg",
        },
        {
            id: 8,
            title: "Amen live",
            artist: "Artist",
            image: "/images/cover-4.jpeg",
        },

        {
            id: 7,
            title: "Odudu Live",
            artist: "Artist",
            image: "/images/cover-1.jpeg",
        },
        {
            id: 6,
            title: "Unreserved Praise",
            artist: "Artist",
            image: "/images/cover-3.jpeg",
        },

    ]


    const dailymix = [
        {
            id: 24,
            title: "Gbogbonise",
            artist: "01",
            image: "/download (44).jpg",
            description: "A vibrant mix of uplifting worship and praise songs.",
        },
        {
            id: 21,
            title: "I have Escaped",
            artist: "02",
            image: "/pencil art.jpg",
            description: "Reflective melodies perfect for quiet moments.",
        },
        {
            id: 30,
            title: "Unreserved Praise",
            artist: "03",
            image: "/download (42).jpg",
            description: "High-energy gospel tracks to brighten your day.",
        },
        {
            id: 37,
            title: "Odudu Live",
            artist: "04",
            image: "/How To Draw A Face (Even If You Think You Can’t) – With the Best Face Drawing References to Guide___.jpg",
            description: "Live recordings filled with passion and powerful vocals.",
        },
        {
            id: 42,
            title: "I have Escaped",
            artist: "05",
            image: "/pencil art.jpg",
            description: "A collection of inspiring songs about hope and freedom.",
        },
        {
            id: 81,
            title: "Amen live",
            artist: "06",
            image: "/download (43).jpg",
            description: "Soulful live performances that create an immersive experience.",
        },
        {
            id: 57,
            title: "Odudu Live",
            artist: "07",
            image: "/tom holland.jpg",
            description: "Dynamic rhythms and heartfelt worship moments.",
        },
        {
            id: 60,
            title: "Unreserved Praise",
            artist: "08",
            image: "/download (44).jpg",
            description: "A blend of contemporary gospel and praise anthems.",
        },
        {
            id: 62,
            title: "Unreserved Praise",
            artist: "08",
            image: "/Love her.jpg",
            description: "Feel-good tracks curated for everyday listening.",
        },
        {
            id: 70,
            title: "Unreserved Praise",
            artist: "08",
            image: "/tom holland.jpg",
            description: "An inspiring mix of worship favorites and new releases.",
        },
        {
            id: 66,
            title: "Unreserved Praise",
            artist: "08",
            image: "/download (44).jpg",
            description: "Powerful songs that encourage faith and gratitude.",
        },
    ];

    return (
        <div className="flex mx-2 ">
            <div className="w-73 bg-[#1a1a1a] max-h-screen overflow-scroll sidebar scrollbar-auto scrollbar-thumb-transparent scrollbar-track-transparent hover:scrollbar-thumb-gray-700 rounded-2xl p-4 -translate-x-full  lg:translate-x-0 fixed lg:static">

                <div className="flex justify-between items-center sticky top-0 overflow-auto bg-inherit  p-3 text-white">
                    <h2 className="text-[16px] font-bold">Your Library</h2>

                    <Link href="/upload-song" >
                        <Plus />
                    </Link>

                </div>

                {songs.map((song) => (
                    <div key={song.id}>
                        {songs.map((song) => (
                            <div
                                key={song.id}
                                className="flex items-center relative group  gap-1 mx-2 my-6 hover:bg-zinc-800 rounded-md"
                            >
                                <div className="w-12 h-12 group-[hover]: rounded-full overflow-hidden border border-zinc-600">
                                    <Image
                                        src={song.image}
                                        alt={song.title}
                                        width={48}
                                        height={48}
                                        className="w-full h-full object-cover"

                                    />


                                </div>

                                <button className="absolute bottom-2 left-2  text-white px-3 py-2 rounded-full opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                                    ▶
                                </button>


                                <div>
                                    <h3 className="text-white text-sm font-medium">
                                        {song.title}
                                    </h3>
                                    <p className="text-zinc-400 text-xs">
                                        {song.artist}
                                    </p>
                                </div>
                            </div>
                        ))}

                    </div>
                ))}

                <button className="fixed bottom-5 left-5 bg-black w-8 h-8 grid place-items-center text-white rounded-full z-50 cursor-pointer lg-hidden">
                    <Plus />
                </button>
            </div>

            {/* SECOND BAR */}


            <div className="w-220 mx-2 rounded-2xl h-screen flex  flex-col  bg-[#1a1a1a]">

                <div className="flex w-full rounded-t-2xl bg-[#4d3a1a] items-center h-15 gap-2 px-8">
                    <button className="bg-[#333] opacity-85 hover:opacity-100 rounded-4xl text-white py-1 px-4">All</button>
                    <button className="bg-[#333] opacity-85 hover:opacity-100 rounded-4xl text-white py-1 px-4">Music</button>
                    <button className="bg-[#333] opacity-85 hover:opacity-100 rounded-4xl text-white py-1 px-4">Podcast</button>
                </div>


                <div className="px-8 grid grid-cols-4 gap-2 p-2">
                    {playlists.map((playlist) => (
                        <div
                            key={playlist.id}
                            className="flex cursor-pointer h-14 relative group  bg-[#2a2a2a] p-2 rounded-sm transition"
                        >
                            <div>
                                <Image
                                    src={playlist.image}
                                    alt={playlist.title}
                                    width={48}
                                    height={48}
                                    className="object-cover"
                                />

                            </div>
                            <button className="absolute bottom-2 right-2 bg-green-500 text-black px-3 py-2 rounded-full opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                                ▶
                            </button>

                            <p className="text-white text-[14px] mx-1 font-bold mt-2">
                                {playlist.title}
                            </p>
                        </div>
                    ))}
                </div>



                <div className="flex flex-col px-8  cursor-pointer  ">


                </div>


                <div className="px-8 mt-6 m-2">


                    <p className="text-white text-[24px] font-bold mb-3">
                        Made For You
                    </p>


                    <div className="flex gap-2 overflow-x-auto scrollbar-hide whitespace-nowrap">
                        {dailymix.map((mix) => (
                            <div
                                key={mix.id}
                                className="relative group shrink-0 w-45 h-45 p-1 rounded-lg hover:bg-[#2a2a2a] overflow-hidden"
                            >

                                <div className="relative w-full h-full rounded-md overflow-hidden">
                                    <Image
                                        src={mix.image}
                                        alt="Cover Image"
                                        fill
                                        className="object-cover"
                                    />
                                </div>

                               
                                

                                <button className="absolute bottom-2 right-2 bg-green-500 text-black px-3 py-2 rounded-full opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                                    ▶
                                </button>


                                 <p>{mix.description}</p>
                            </div>
                            
                        ))}
                    </div>

                </div>
            </div>





        </div>







    );
}