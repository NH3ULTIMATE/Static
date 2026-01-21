import Link from "next/link";
import React from "react";

function navbar() {
  return (
    <nav className="fixed z-50 left-0 top-0 h-[72px] w-full flex items-center justify-center bg-black text-white font-text ">
      <div className="absolute top-[50%] left-[50%] transform -translate-[50%] ">
        <img
          src="./navbar_logo.svg"
          alt="Logo"
          height={38}
          width={38}
          className="logo"
        />
      </div>
      <div className="relative h-64px w-[85%] flex justify-between items-center">
        <div className="title">
          <p>Mercedes-Benz</p>
        </div>

        <div className="links flex [&>div]:px-4  group ">
          <div className="hover:text-white group-hover:text-white/50  transition-all duration-500 ">
            <Link className="" href="/">
              Home
            </Link>
          </div>

          <div className="hover:text-white group-hover:text-white/50  transition-all duration-500">
            <Link href="/">Login</Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default navbar;
