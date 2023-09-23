import React from 'react'
import logo from '../img/logo.png'
import SideIcons from './SideIcons';

export default function Sidebar() {
  return (
    <>
        <div className="flex-col items-center justify-around p-2">
            <a className="flex items-center justify-start" href='/'>
                <i className="fa-solid fa-bars px-3 text-sm cursor-pointer hover:bg-slate-100 hover:rounded-full p-2"></i>
                <img src={logo} alt="" className='w-[5rem] px-2 cursor-pointer'/>
            </a>
            <SideIcons/>
        </div>
    </>
  );
}
