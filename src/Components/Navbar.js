import React from "react";
import logo from '../img/logo.png'

export default function Navbar() {
  return (
    <> 
      <nav className="flex-col py-2 w-[100%] bg-white">
        <ul className="flex justify-between items-center">
          <li className="flex items-center w-[10%] px-5">
            <a className="" href='/'><i className="fa-solid fa-bars text-sm cursor-pointer hover:bg-slate-100 hover:rounded-full"></i></a>
            <a className="px-4" href="/"><img src={logo} alt="" className='w-[4rem] cursor-pointer'/></a>
          </li>
          <li className="flex items-center justify-center w-[80%]">
            <input className="border border-black px-4 mx-2 py-[2px] rounded-[20px] w-[40%]" id="search" placeholder="Search"></input>
            <a href="/" className="text-lg"><i class="fa-solid fa-microphone"></i></a>
          </li>
          <li className="flex items-center justify-center space-x-4 w-[10%]">
            <a href="/" className="text-lg"><i class="fa-regular fa-bell"></i></a>
            <a href="/" className="text-lg"><i class="fa-regular fa-circle-user"></i></a>
          </li>
        </ul>
      </nav>
    </>
  );
}
