"use client";

import {
  Music,
  Mic2,
  Search,
  Trash2,
  Plus,
} from "lucide-react";
import {
  Users,
  ListMusic,
  PlayCircle,
  TrendingUp,
  Settings,
  LogOut,
  Album,
} from "lucide-react";

import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

export default function SongsPage() {
  const pathname = usePathname();
  const router = useRouter();

const menu = [
  { name: "Dashboard", href: "/admins", icon: <Music size={18} /> },
  { name: "Songs", href: "/admins/songs", icon: <Mic2 size={18} /> },
  { name: "Artists", href: "/admins/artists", icon: <Users size={18} /> },
  { name: "Albums", href: "/admins/albums", icon: <Album size={18} /> },
  { name: "Playlists", href: "/admins/playlists", icon: <ListMusic size={18} /> },
  { name: "Users", href: "/admins/users", icon: <Users size={18} /> },
  { name: "Analytics", href: "/admins/analytics", icon: <TrendingUp size={18} /> },
  { name: "Settings", href: "/admins/settings", icon: <Settings size={18} /> },
];

  const songs = [
    { id: 1, title: "Calm Down", artist: "Rema", plays: "950K" },
    { id: 2, title: "Last Last", artist: "Burna Boy", plays: "700K" },
    { id: 3, title: "Unavailable", artist: "Davido", plays: "500K" },
  ];

  return (
    <div className="min-h-screen bg-[#121212] text-white flex">

      {/* SIDEBAR */}
      <aside className="w-64 h-screen sticky top-0 bg-[#181818] border-r border-zinc-800 p-6 flex flex-col">

        <div className="flex items-center gap-2 mb-10">
          <Image src="/icons8-spotify-96.png" alt="logo" width={30} height={30} />
          <h1 className="text-xl font-bold">Spotify Admin</h1>
        </div>

        <nav className="space-y-2 flex-1">
          {menu.map((item) => {
            const isActive = pathname === item.href;

            return (
              <Link
                key={item.href}
                href={item.href}
                className={`flex items-center gap-3 p-3 rounded-xl
                ${isActive ? "bg-[#1DB954] text-black" : "text-zinc-300 hover:bg-zinc-800"}`}
              >
                {item.icon}
                {item.name}
              </Link>
            );
          })}
        </nav>

        <button
          onClick={() => router.push("/login")}
          className="flex items-center gap-2 text-red-400"
        >
          <LogOut size={18} />
          Logout
        </button>
      </aside>

      {/* MAIN */}
      <main className="flex-1 p-8">

        {/* HEADER */}
        <div className="flex justify-between mb-6">
          <h1 className="text-2xl font-bold flex items-center gap-2">
            <Music /> Songs
          </h1>

          <button className="bg-[#1DB954] px-4 py-2 rounded-xl flex items-center gap-2">
            <Plus size={18} />
            Add Song
          </button>
        </div>

        {/* SEARCH */}
        <div className="flex items-center bg-[#181818] px-4 py-3 rounded-xl mb-6 w-[400px]">
          <Search size={18} />
          <input
            placeholder="Search songs..."
            className="bg-transparent outline-none ml-3 w-full"
          />
        </div>

        {/* TABLE */}
        <div className="bg-[#181818] rounded-xl p-6">
          <table className="w-full">
            <thead className="text-zinc-400">
              <tr>
                <th className="text-left">Title</th>
                <th className="text-left">Artist</th>
                <th className="text-left">Plays</th>
                <th className="text-left">Action</th>
              </tr>
            </thead>

            <tbody>
              {songs.map((s) => (
                <tr key={s.id} className="border-t border-zinc-800">
                  <td className="py-3">{s.title}</td>
                  <td>{s.artist}</td>
                  <td>{s.plays}</td>
                  <td>
                    <button className="text-red-400">
                      <Trash2 size={18} />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

      </main>
    </div>
  );
}