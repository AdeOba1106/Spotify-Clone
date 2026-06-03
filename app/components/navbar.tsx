import Image from "next/image";

export default function Navbar() {
  return (
    <nav className="w-full bg-black">
      <div className="flex w-full justify-between items-center p-3 px-4">
        
        {/* LEFT SIDE */}
        <div className="flex items-center gap-4 flex-1 max-w-xl">
          <Image
            src="/icons8-spotify-96.png"
            alt="Spotify"
            width={40}
            height={40}
            className="cursor-pointer"
          />

          <Image
            src="/icons8-home-48.png"
            alt="Home"
            width={40}
            height={40}
            className="bg-[#1f1f1f] p-2 rounded-full cursor-pointer invert"
          />

          {/* Fixed the w-110 bug with w-full + a parent max-width container */}
          <input
            type="text"
            placeholder="What do you want to play?"
            className="text-white placeholder:text-gray-400 bg-[#1f1f1f] focus:outline-none focus:ring-2 focus:ring-white p-3 px-5 w-full rounded-full opacity-75 focus:opacity-100 shadow-2xl transition-all duration-200"
          />
        </div>

        {/* RIGHT SIDE */}
        <div className="flex items-center text-sm font-semibold gap-6 text-white">
          
          <p className="text-black bg-white rounded-full px-4 py-2 cursor-pointer transition-transform duration-300 hover:scale-105">
            Explore premium
          </p>

          <div className="flex items-center opacity-75 hover:opacity-100 gap-2 cursor-pointer transition-transform duration-300 hover:scale-105">
            <Image
              src="/icons8-insert-100.png"
              alt="Install"
              width={20}
              height={20}
              className="invert"
            />
            <p>Install App</p>
          </div>

          <Image
            src="/icons8-notification-bell-100.png"
            alt="Notifications"
            width={20}
            height={20}
            className="opacity-75 hover:opacity-100 cursor-pointer transition-transform duration-300 hover:scale-110 invert"
          />

          <Image
            src="/icons8-friends-100.png"
            alt="Friends"
            width={20}
            height={20}
            className="opacity-75 hover:opacity-100 cursor-pointer transition-transform duration-300 hover:scale-110 invert"
          />

          <p className="bg-[#a00772] rounded-full w-8 h-8 flex items-center justify-center cursor-pointer text-white font-bold">
            A
          </p>
        </div>

      </div>
    </nav>
  );
}