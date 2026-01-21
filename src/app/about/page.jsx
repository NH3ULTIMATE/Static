"use client";
import React from "react";
import gsap from "gsap";
import { useRef, useEffect } from "react";

function page() {
  const text = useRef(null);
  const textRef = useRef(null);
  useEffect(() => {
    gsap.to(text.current, {
      backgroundPosition: "200% center",
      repeat: -1,
      duration: 3,
      ease: "linear",
    });
  }, []);
  return (
    <>
      <div className="px-[7.5%] bg-black">
        <div className="flex items-center justify-center py-5 text-white text-4xl">
          About Mercedes-Benz
        </div>
        <div>
          <h1 className="about mercedes benz  py-5 text-white">
            Shaping the Future. Mercedes-Benz stands at the forefront of
            automotive excellence, blending timeless luxury with groundbreaking
            technology. For over a century, we have been dedicated to redefining
            mobility by delivering vehicles that offer unparalleled performance,
            comfort, and safety. Our relentless pursuit of perfection, combined
            with a rich heritage of craftsmanship, has positioned us as a global
            leader in the premium automobile segment. At Mercedes-Benz,
            innovation is at the heart of everything we do. From pioneering
            advanced driver assistance systems and sustainable powertrains to
            integrating state-of-the-art connectivity features, we are committed
            to creating vehicles that not only meet the needs of today but
            anticipate the challenges of tomorrow. Our commitment to
            sustainability ensures that luxury and responsibility go hand in
            hand. Our customers are at the center of our vision. We offer
            personalized solutions, ensuring that every driving experience is as
            unique as the individuals behind the wheel. Whether it's our
            celebrated sedans, robust SUVs, or cutting-edge electric models,
            Mercedes-Benz embodies elegance, precision, and confidence. Join us
            as we drive toward a future where performance meets purpose, and
            innovation fuels inspiration. Mercedes-Benz – The Best or Nothing.
          </h1>
          <div className="founders flex items-center justify-center py-5 text-white text-4xl">
            Founders: Karl Benz and Gottlieb Daimler
          </div>
          <div>
            <h1 className="text-white opacity-0 transform translate-y-[20px]">
              Karl Benz (1844 – 1929) Karl Benz is widely regarded as the father
              of the modern automobile. In 1886, he built the Benz
              Patent-Motorwagen, which is recognized as the world's first
              practical automobile powered by an internal combustion engine.
              With his wife, Bertha Benz, by his side, they embarked on a
              historic journey that showcased the potential of motorized
              transport. His vision to build a faster, more efficient, and
              reliable vehicle laid the foundation for what would eventually
              become Mercedes-Benz. Gottlieb Daimler (1834 – 1900) At nearly the
              same time, Gottlieb Daimler, together with his lifelong partner
              Wilhelm Maybach, focused on developing a high-speed gasoline
              engine. Daimler's innovative designs for compact, powerful engines
              enabled the development of fast, practical vehicles. His work led
              to the formation of Daimler-Motoren-Gesellschaft (DMG), a company
              that became one of the cornerstones of the automotive industry.
              The Birth of Mercedes-Benz In 1926, the two pioneers'
              companies—Benz & Cie. and Daimler-Motoren-Gesellschaft
              (DMG)—merged to form Mercedes-Benz. The name “Mercedes” was
              inspired by the daughter of Emil Jellinek, a prominent businessman
              and automobile enthusiast, while “Benz” honored Karl Benz’s
              lasting contribution. Together, they set the stage for what would
              become one of the most prestigious and respected car brands in the
              world.
            </h1>
          </div>
          <div className="global leadership flex items-center justify-center py-5 text-white text-4xl">
            What Made Mercedes-Benz Reach Global Leadership
          </div>
          <div>
            <h1 className="text-white">
              Mercedes-Benz didn’t achieve greatness overnight. It was the
              result of consistent innovation, attention to detail, and a
              relentless commitment to quality. Here’s what set the brand apart:
              Technological Innovation Mercedes-Benz has been a pioneer in
              developing groundbreaking automotive technologies. From the
              invention of the anti-lock braking system (ABS) and airbags to
              advanced driver-assistance systems (ADAS), the brand continually
              raises industry standards. Luxury and Comfort The brand’s vehicles
              combine state-of-the-art technology with timeless craftsmanship.
              Interiors are meticulously designed with premium materials,
              ergonomic layouts, and attention to every comfort feature, making
              each journey unforgettable. Performance and Safety Mercedes-Benz
              cars are engineered to provide superior driving dynamics while
              ensuring maximum safety. With advanced suspension systems,
              lightweight materials, and intelligent drive systems, the vehicles
              offer both agility and reliability. Global Reach Today,
              Mercedes-Benz operates in over 150 countries, with manufacturing
              plants, research centers, and dealerships across the world. The
              brand’s commitment to excellence is reflected in its global
              reputation for dependability and luxury.
            </h1>
          </div>
          <div className="vision flex items-center justify-center py-5 text-white text-4xl">
            The Vision for the Future
          </div>
          <div>
            <h1 className="text-white">
              Mercedes-Benz is not just a car brand—it’s a symbol of
              forward-thinking engineering. The company’s mission for the future
              revolves around sustainability, innovation, and smarter mobility:
              Electrification With the introduction of models like the EQ
              series, Mercedes-Benz is committed to accelerating the transition
              to electric mobility. Their goal is to offer a fully electric
              lineup by the coming decades, combining performance with
              eco-friendly technologies. Autonomous Driving Safety and
              convenience are at the forefront of the brand’s autonomous driving
              research. Cutting-edge sensors, AI algorithms, and machine
              learning models are enabling vehicles that can navigate complex
              environments with minimal human intervention. Sustainability
              Initiatives Mercedes-Benz is also working toward reducing its
              environmental footprint. By using sustainable materials,
              optimizing production processes, and supporting renewable energy
              sources, the brand is focused on building a greener tomorrow.
              Connected Experiences The integration of smart interfaces and
              connected technologies allows drivers to interact with their
              vehicles seamlessly. From remote diagnostics to personalized
              driving experiences, Mercedes-Benz aims to make every journey
              smarter and safer.
            </h1>
          </div>
          <div className="quote flex items-center justify-center py-6 text-white text-4xl bg-black">
            <h1
              ref={text}
              className="bg-gradient-to-r from-[#ff00cc] via-[#0AE448] to-white bg-clip-text text-transparent"
              style={{
                backgroundSize: "200% 100%",
                backgroundPosition: "0% center",
              }}
            >
              “The best or nothing — driving the future with passion, precision,
              and purpose.”
            </h1>
          </div>
        </div>
      </div>
    </>
  );
}

export default page;
