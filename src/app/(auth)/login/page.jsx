"use client";
import React, { useState } from "react";
import Intro from "@/components/Intro";

function page() {
  const [form, setForm] = useState({
    firstName: "",
    secondName: "",
    email: "",
    password: "",
  });

  const [error, setError] = useState("");

  return (
    <main className=" bg-black flex flex-row items-center px-[15%] text-white min-h-screen">
      <Intro>
        <div className="animate flex flex-col gap-[80px] p-4 ">
          <div className="">
            <p className="text-md">START FOR FREE</p>
            <h1 className="text-4xl">Create new account.</h1>
          </div>
          <form
            action=""
            className="flex flex-col gap-6 [&>input]:rounded-xl [&>input]:border-2 [&>input]:border-white [&>input]:p-4"
          >
            <div className="flex flex-row gap-6 [&>input]:rounded-xl [&>input]:border-2 [&>input]:border-white [&>input]:p-4">
              <input type="text" placeholder="first name" />
              <input type="text" placeholder="second name" />
            </div>
            <input type="text" placeholder="Email" />
            <input type="text" placeholder="Password" />
            <div className="flex flex-row items-center justify-between gap-6  [&>button]:rounded-full [&>button]:w-full [&>button]:p-4 [&>button]:border-2 [&>button]:border-white">
              <button>Change Method</button>
              <button>Create account</button>
            </div>
          </form>
        </div>
      </Intro>
    </main>
  );
}

export default page;
