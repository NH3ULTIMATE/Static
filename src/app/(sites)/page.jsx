"use client";
import React, { useEffect } from "react";
import Intro from "@/components/Intro";

function page() {
  useEffect(() => {
    const gallery = document.getElementById("gallery");
    const items = gallery?.children;
    let lastHovered = null;

    if (items) {
      for (let item of items) {
        item.addEventListener("mouseenter", () => {
          if (lastHovered) lastHovered.classList.remove("active");
          item.classList.add("active");
          lastHovered = item;
        });
      }
    }
  }, []);

  const cards = [
    { src: "/card-1.jpg", label: "Super Car" },
    { src: "/card-2.jpg", label: "Speed Car" },
    { src: "/card-3.jpg", label: "Nature View" },
    { src: "/card-4.jpg", label: "City Night" },
    { src: "/card-5.jpg", label: "Sunset Glow" },
  ];

  return (
    <div className=" bg-black min-h-screen ">
      {/* Hero Section */}
      {/* <Intro /> */}
      <div className="hero relative h-[100vh] w-full bg-cover bg-no-repeat bg-[url('/car-1.jpg')] flex items-center px-[7.5%] bg-center">
        <div className="flex flex-col gap-2">
          <p className="text-4xl text-white">Performance In Every Detail.</p>
          <p className="mt-[20px] text-white ">
            Concept AMG CLE <span className="font-sans">53.</span>
          </p>
          <button className="rounded-full hover:bg-stone-500 transition-all duration-200 bg-white w-fit px-3 py-2">
            Discover More {`>`}
          </button>
        </div>
        <div className="absolute bottom-0 left-0 w-full h-20 bg-gradient-to-b from-transparent to-black pointer-events-none"></div>
      </div>

      {/* A Video With Info */}

      <div className="section-one relative overflow-hidden mt-[100px] h-[100vh] w-full flex items-center bg-black text-white">
        <video
          className="absolute inset-0 min-h-screen"
          autoPlay
          loop
          muted
          playsInline
        ></video>
        <source src="/benz-video.mp4" type="video/mp4" />
        <div className="relative z-[10]">
          <div className="flex flex-col gap-2">
            <p className="text-4xl">CLASS OF ITS OWN</p>
            <p className="mt-[20px]">Configure Now</p>
            <button className="rounded-full hover:bg-stone-500 transition-all durarion-200 w-fit px-3 py-2 bg-white text-black cursor-pointer">
              Discover Now {`>`}
            </button>
          </div>
        </div>
      </div>

      {/* Hoverable Image Cards */}

      <style>{`
        .active {
          flex: 2 !important;
        }
      `}</style>

      <div className="section-three title text-white mt-25 px-[7.5%] text-4xl">
        <h1>Explore More</h1>
      </div>
      <div
        id="gallery"
        className="flex gap-2 w-[90%] max-w-[1200px] mx-auto mt-15 overflow-hidden"
      >
        {cards.map((card, index) => (
          <div
            key={index}
            className="flex flex-col flex-1 transition-all duration-500 ease-in-out"
          >
            <div className="group relative h-[400px] w-full overflow-hidden transition-all duration-500 ease-in-out cursor-pointer">
              <img
                src={card.src}
                alt={card.label}
                className="h-full w-full object-cover transition-all duration-500 ease-in-out bg-amber-100"
              />
            </div>
            <p className="text-white text-sm mt-2 text-left">{card.label}</p>
          </div>
        ))}
      </div>

      {/* The S Class */}

      <div className="section-5 relative h-[100vh] w-full flex items-center px-[7.5%] bg-black text-white">
        <div className="flex flex-row w-full justify-between ">
          <div className="flex flex-col justify-between ">
            <div className="flex flex-col gap-[20px]">
              <p className="text-lg">Vehicles</p>
              <p className="text-6xl">The S-Class.</p>
            </div>
            <div className="flex flex-col gap-6 justify-between">
              <p className="">
                Expressive design, first-class comfort, and innovative safety
                technology.
              </p>
              <button className="rounded-full w-fit px-3 py-1  hover:bg-stone-500 bg-white text-black">
                Configure now {`>`}
              </button>
            </div>
          </div>
          <div className="flex flex-row justify-between">
            <img
              className="h-[247px] w-[463px] "
              src="./s-class.jpg"
              alt="s-class"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default page;
