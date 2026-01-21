"use client ";
import React, { useEffect, useRef } from "react";
import gsap from "gsap";

export default function Intro() {
  const containerRef = useRef(null);
  const text = ["m", "e", "r", "c", "e", "d", "e", "s"];
  useEffect(() => {
    const q = gsap.utils.selector(containerRef.current);
    document.body.style.overflow = "hidden";
    gsap.to(q("div"), {
      duration: 2,
      stagger: 0.1,
      yPercent: -100,
      ease: "power3.inOut",
      onComplete: () => {
        document.body.style.overflow = "";
      },
    });
  });
  return (
    <div
      ref={containerRef}
      className="fixed inset-0 z-1000  flex items-center justify-center pointer-events-none "
    >
      {text.map((text, index) => (
        <div
          key={index}
          className="text-3xl w-full min-h-screen flex items-center justify-center uppercase bg-black text-white"
        >
          <h1>{text}</h1>
        </div>
      ))}
    </div>
  );
}

// import { useEffect } from "react";
// import gsap from "gsap";

// export default function Intro({ children }) {
//   useEffect(() => {
//     const con = gsap.context(() => {
//       gsap.fromTo(
//         ".animate",
//         { opacity: 0, y: 50 },
//         { opacity: 1, y: 0, duration: 1, stagger: 0.3, ease: "power3.inOut" }
//       );
//     });
//     return () => con.revert();
//   }, []);
//   return <div className="animate">
//     {children}
//     </div>;
// }

// <div className="text-3xl w-full min-h-screen">
//         <h1>m</h1>
//       </div>
