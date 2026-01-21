"use client";
import React from "react";
import { useState, useEffect } from "react";

export default function UseMousePosition() {
  const [position, setposition] = useState({ x: 0, y: 0 });
  const mouseTrack = (e) => {
    setposition({ x: e.clientX, y: e.clientY });
  };
  useEffect(() => {
    window.addEventListener("mousemove", mouseTrack);
    return () => window.removeEventListener("mousemove", mouseTrack);
  }, []);
  return position;
}
