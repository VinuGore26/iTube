import React from "react";
import yt from '../img/YT.png'

export default function SideIcons() {
  return (
    <>
      <div className="p-1 py-3">
        <ul className="flex-col items-center justify-start text-sm">
          <li>
            <a href="/" className="flex items-center justify-start py-1 px-2 w-[90%] hover:bg-slate-100 hover:cursor-pointer hover:rounded-md hover:font-medium">
              <i class="fa-solid fa-house"></i>
              <p className="px-4 text-[11px] font-light">Home</p>
            </a>
          </li>
          <li>
            <a href="/" className="flex items-center justify-start py-1 px-2 w-[90%] hover:bg-slate-100 hover:cursor-pointer hover:rounded-md hover:font-medium">
              <i class="fa-regular fa-circle-play"></i>
              <p className="px-4 text-[11px] font-light">Shorts</p>
            </a>
          </li>
          <li>
            <a href="/" className="flex items-center justify-start py-1 px-2 w-[90%] hover:bg-slate-100 hover:cursor-pointer hover:rounded-md hover:font-medium">
              <i class="fa-solid fa-list-check"></i>
              <p className="px-4 text-[11px] font-light">Subscriptions</p>
            </a>
          </li>
          <div className="py-3">
            <hr/>
          </div>
          <li>
            <a href="/" className="flex items-center justify-start py-1 px-2 w-[90%] hover:bg-slate-100 hover:cursor-pointer hover:rounded-md hover:font-medium">
              <i class="fa-solid fa-bars-progress"></i>
              <p className="px-5 text-[11px] font-light">Library</p>
            </a>
          </li>
          <li>
            <a href="/" className="flex items-center justify-start py-1 px-2 w-[90%] hover:bg-slate-100 hover:cursor-pointer hover:rounded-md hover:font-medium">
              <i class="fa-solid fa-clock-rotate-left"></i>
              <p className="px-5 text-[11px] font-light">History</p>
            </a>
          </li>
          {/* <li>
            <a href="/" className="flex items-center justify-start py-1 px-2 w-[90%] hover:bg-slate-100 hover:cursor-pointer hover:rounded-md hover:font-medium">
              <i class="fa-solid fa-video"></i>
              <p className="px-5 text-[11px] font-light">Your Videos</p>
            </a>
          </li>
          <li>
            <a href="/" className="flex items-center justify-start py-1 px-2 w-[90%] hover:bg-slate-100 hover:cursor-pointer hover:rounded-md hover:font-medium">
              <i class="fa-regular fa-clock"></i>
              <p className="px-5 text-[11px] font-light">Watch Later</p>
            </a>
          </li>
          <li>
            <a href="/" className="flex items-center justify-start py-1 px-2 w-[90%] hover:bg-slate-100 hover:cursor-pointer hover:rounded-md hover:font-medium">
              <i class="fa-regular fa-thumbs-up"></i>
              <p className="px-5 text-[11px] font-light">Liked Videos</p>
            </a>
          </li>
          <li>
            <a href="/" className="flex items-center justify-start py-1 px-2 w-[90%] hover:bg-slate-100 hover:cursor-pointer hover:rounded-md hover:font-medium">
              <i class="fa-solid fa-hard-drive"></i>
              <p className="px-5 text-[11px] font-light">Saved Playlists</p>
            </a>
          </li> */}
          <div className="py-3">
            <hr/>
          </div>
          <li>
            <div className="flex-col items-center justify-start pt-1 px-2 w-[90%]">
              <p className="px-2 text-[10px] font-medium leading-4">Sign in to like videos, comment & subscribe.</p>
              <button className="text-blue-600 m-2 flex rounded-full text-[10px] font-semibold p-1 px-2 border-[0.5px] border-blue-300"><i class="fa-regular fa-circle-user text-sm px-1"></i>Sign in</button>
            </div>
          </li>
          <div className="py-3">
            <hr/>
          </div>
          <li>
            <p className="px-2 pb-1 text-[12px]">Explore</p>
            <a href="/" className="flex items-center justify-start py-1 px-2 w-[90%] hover:bg-slate-100 hover:cursor-pointer hover:rounded-md hover:font-medium">
              <i class="fa-solid fa-fire-flame-curved"></i>
              <p className="px-5 text-[11px] font-light">Trending</p>
            </a>
          </li>
          <li>
            <a href="/" className="flex items-center justify-start py-1 px-2 w-[90%] hover:bg-slate-100 hover:cursor-pointer hover:rounded-md hover:font-medium">
              <i class="fa-solid fa-bag-shopping"></i>
              <p className="px-5 text-[11px] font-light">Shopping</p>
            </a>
          </li>
          <li>
            <a href="/" className="flex items-center justify-start py-1 px-2 w-[90%] hover:bg-slate-100 hover:cursor-pointer hover:rounded-md hover:font-medium">
              <i class="fa-solid fa-music"></i>
              <p className="px-5 text-[11px] font-light">Music</p>
            </a>
          </li>
          <li>
            <a href="/" className="flex items-center justify-start py-1 px-2 w-[90%] hover:bg-slate-100 hover:cursor-pointer hover:rounded-md hover:font-medium">
              <i class="fa-solid fa-clapperboard"></i>
              <p className="px-5 text-[11px] font-light">Films</p>
            </a>
          </li>
          <li>
            <a href="/" className="flex items-center justify-start py-1 px-2 w-[90%] hover:bg-slate-100 hover:cursor-pointer hover:rounded-md hover:font-medium">
              <i class="fa-solid fa-tower-broadcast"></i>
              <p className="px-5 text-[11px] font-light">Live</p>
            </a>
          </li>
          <li>
            <a href="/" className="flex items-center justify-start py-1 px-2 w-[90%] hover:bg-slate-100 hover:cursor-pointer hover:rounded-md hover:font-medium">
              <i class="fa-solid fa-gamepad"></i>
              <p className="px-5 text-[11px] font-light">Gaming</p>
            </a>
          </li>
          <li>
            <a href="/" className="flex items-center justify-start py-1 px-2 w-[90%] hover:bg-slate-100 hover:cursor-pointer hover:rounded-md hover:font-medium">
              <i class="fa-regular fa-newspaper"></i>
              <p className="px-5 text-[11px] font-light">News</p>
            </a>
          </li>
          <li>
            <a href="/" className="flex items-center justify-start py-1 px-2 w-[90%] hover:bg-slate-100 hover:cursor-pointer hover:rounded-md hover:font-medium">
              <i class="fa-solid fa-trophy"></i>
              <p className="px-5 text-[11px] font-light">Sport</p>
            </a>
          </li>
          <li>
            <a href="/" className="flex items-center justify-start py-1 px-2 w-[90%] hover:bg-slate-100 hover:cursor-pointer hover:rounded-md hover:font-medium">
              <i class="fa-solid fa-graduation-cap"></i>
              <p className="px-4 text-[11px] font-light">Learning</p>
            </a>
          </li>
          <li>
            <a href="/" className="flex items-center justify-start py-1 px-2 w-[90%] hover:bg-slate-100 hover:cursor-pointer hover:rounded-md hover:font-medium">
              <i class="fa-solid fa-tags"></i>
              <p className="px-5 text-[11px] font-light">Fashion & beauty</p>
            </a>
          </li>
          <div className="py-3">
            <hr/>
          </div>
          <li>
            <a href="/" className="flex items-center justify-start py-1 px-2 w-[90%] hover:bg-slate-100 hover:cursor-pointer hover:rounded-md hover:font-medium">
              <i class="fa-solid fa-circle-plus"></i>
              <p className="px-5 text-[11px] font-light flex">Browse Channels</p>
            </a>
          </li>
          <div className="py-3">
            <hr/>
          </div>
          <li>
            <p className="px-2 pb-1 text-[12px]">More from YouTube</p>
            <a href="/" className="flex items-center justify-start py-1 px-2 w-[90%] hover:bg-slate-100 hover:cursor-pointer hover:rounded-md hover:font-medium">
              <img src={yt} alt="" className="w-[18px]"/>
              <p className="px-4 text-[10px] font-light flex">YouTube Premium</p>
            </a>
          </li>
          <li>
            <p className="px-2 pb-1 text-[12px]">More from YouTube</p>
            <a href="/" className="flex items-center justify-start py-1 px-2 w-[90%] hover:bg-slate-100 hover:cursor-pointer hover:rounded-md hover:font-medium">
              <img src={yt} alt="" className="w-[18px]"/>
              <p className="px-4 text-[10px] font-light flex">YouTube Premium</p>
            </a>
          </li>
          <li>
            <p className="px-2 pb-1 text-[12px]">More from YouTube</p>
            <a href="/" className="flex items-center justify-start py-1 px-2 w-[90%] hover:bg-slate-100 hover:cursor-pointer hover:rounded-md hover:font-medium">
              <img src={yt} alt="" className="w-[18px]"/>
              <p className="px-4 text-[10px] font-light flex">YouTube Premium</p>
            </a>
          </li>
        </ul>
      </div>
    </>
  );
}
