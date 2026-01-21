"use client";
import React, { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function Page() {
  const container = useRef(null);
  const heading = useRef(null);
  const contact = useRef(null);
  const warenty = useRef(null);
  const documentation = useRef(null);
  const feedback = useRef(null);

  useGSAP(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: container.current,
          start: "top +=70",
          end: "+=4000",
          pin: true,
          scrub: 1,
          pinSpacing: true,
        },
      });

      tl.fromTo(
        contact.current,
        { color: "#999999" },
        { color: "#ffffff", ease: "none" }
      );
      tl.fromTo(
        warenty.current,
        { color: "#999999" },
        { color: "#ffffff", ease: "none" }
      );
      tl.fromTo(
        documentation.current,
        { color: "#999999" },
        { color: "#ffffff", ease: "none" }
      );
      tl.fromTo(
        feedback.current,
        { color: "#999999" },
        { color: "#ffffff", ease: "none" }
      );
    }, container);

    return () => ctx.revert();
  }, []);

  return (
    <div className="flex flex-col justify-center bg-black text-white min-h-screen">
      <div
        ref={container}
        className="flex flex-col items-center gap-[25vh] min-h-screen"
      >
        <div
          ref={heading}
          className="flex items-center justify-center text-4xl  bg-black z-10"
        >
          Help & Support
        </div>
        <section className="px-[7.5%] flex flex-row items-end justify-between gap-3">
          <div className="flex flex-col items-end text-4xl gap-y-8">
            <div ref={contact} style={{ color: "#999999" }}>
              Contact Us |
            </div>
            <div ref={warenty} style={{ color: "#999999" }}>
              Warranty & Insurance |
            </div>
            <div ref={documentation} style={{ color: "#999999" }}>
              Documentation |
            </div>
            <div ref={feedback} style={{ color: "#999999" }}>
              Feedback |
            </div>
          </div>
          <section>
            <div className="flex flex-col justify-start gap-y-3.5 text-2xl text-gray-500">
              <div>
                <p>Phone</p>
                <p>Email</p>
              </div>
              <div>
                <p>Plans</p>
                <p>Coverage</p>
              </div>
              <div>
                <p>Manuals</p>
                <p>Guides</p>
              </div>
              <div>
                <p>Submit Your Feedback</p>
              </div>
            </div>
          </section>
        </section>
      </div>
    </div>
  );
}

export default Page;
