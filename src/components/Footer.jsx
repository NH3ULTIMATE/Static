"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";

function Footer() {
  return (
    <div className="w-full h-[80vh] bg-black px-[7.5%] text-black">
      <div className="h-[40vh]  border-y border-white/20 flex flex-col items-center justify-center gap-6">
        <div className=" text-white text-4xl">More Information.</div>
        <div className="flex flex-wrap justify-center [&>a]:px-4 text-white [&>a]:transition-all [&>a]:duration-500 group">
          <Link
            className="hover:text-white group-hover:text-white/50 "
            href="#"
          >
            Home
          </Link>
          <Link
            className="hover:text-white group-hover:text-white/50 "
            href="#"
          >
            Login
          </Link>
          <Link
            className="hover:text-white group-hover:text-white/50 "
            href="#"
          >
            About
          </Link>
          <Link
            className="hover:text-white group-hover:text-white/50 "
            href="#"
          >
            Discover More
          </Link>
        </div>
      </div>
      <div className="border-b border-white/20 py-7 flex flex-col items-center justify-center text-white/50">
        <h1>
          The stated values were determined in accordance with the prescribed
          WLTP (Worldwide harmonised Light vehicles Test Procedure) measurement
          procedure. The ranges given refer to the German market. The fuel
          consumption, energy consumption and CO2 emissions of a car depend not
          only on the efficient use of the fuel or energy source by the car, but
          also on driving style and other non-technical factors.
        </h1>
      </div>
      <div className="flex flex-col justify-center items-center mt-6 text-white">
        <div className="text-white/50">
          <p>© 2025 Mercedes Benz. All rights reserved.</p>
        </div>
        <button
          onClick={() => {
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
          className="cursor-pointer flex flex-col items-center justify-center gap-2"
        >
          <Image
            className="mt-3"
            src="./navbar_logo.svg"
            alt="Symbol"
            height={38}
            width={38}
          />
          <p className="font-light">Mercedes-Benz</p>
        </button>
      </div>
    </div>
  );
}

export default Footer;
