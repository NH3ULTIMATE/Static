"use client";
import Link from "next/link";
import React, { useRef, useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

function NavbarTwo() {
  const container = useRef(null);
  const links = useRef(null);
  const [toggle, setToggle] = useState(false);
  const t1 = useRef(null);

  useGSAP(() => {
    const l = gsap.utils.selector(links);

    gsap.set(l("a"), {
      y: -20,
      opacity: 0,
    });

    t1.current = gsap
      .timeline({ paused: true })
      .to(container.current, {
        top: "72px",
        ease: "power1.inOut",
      })
      .to(l("a"), {
        y: 0,
        opacity: 1,
        stagger: 0.1,
        duration: 0.2,
      });
  }, []);

  function handleToggle() {
    setToggle((prev) => {
      const next = !prev;
      if (next) {
        t1.current.play();
      } else {
        t1.current.reverse();
      }
      return next;
    });
  }

  return (
    <>
      <nav className="fixed z-50 left-0 top-0 h-[72px] w-full flex items-center justify-center bg-black text-white font-text">
        <div className="absolute top-[50%] left-[50%] transform -translate-x-[50%] -translate-y-[50%]">
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
          <button
            onClick={handleToggle}
            className="rounded-2xl border-2 border-white px-[10px] py-[5px] cursor-pointer text-xl"
          >
            =
          </button>
        </div>
      </nav>

      <div
        ref={container}
        className="fixed top-[-100%] left-1/2 transform -translate-x-1/2 h-[72px] w-[35%] rounded-b-2xl bg-black/80 z-40"
      >
        <div
          ref={links}
          className="flex flex-row justify-center w-full items-center py-6 [&>a]:px-4 text-white"
        >
          <Link
            href="/"
            className="hover:text-white text-white/70 transition-all"
          >
            Home
          </Link>
          <Link
            href="/login"
            className="hover:text-white text-white/70 transition-all"
          >
            Login
          </Link>
          <Link
            href="/about"
            className="hover:text-white text-white/70 transition-all"
          >
            About
          </Link>
          <Link
            href="/support"
            className="hover:text-white text-white/70 transition-all"
          >
            Support
          </Link>
        </div>
      </div>
    </>
  );
}

export default NavbarTwo;
