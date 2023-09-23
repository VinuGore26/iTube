import React from "react";

export default function Navbar() {
  return (
    <>
      <nav className="flex-col bg-red-600 h-10 p-2">
        <ul>
          <li>
            <a href="/">Hi</a>
          </li>
        </ul>
      </nav>
      <div className="flex bg-slate-300 p-2">
        <h1>Hi</h1>
      </div>
    </>
  );
}
