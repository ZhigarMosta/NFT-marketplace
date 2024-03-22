"use client";
import "./HowItWorks.scss";
import imgArr from "@/data/home/HowItWorks/json";
import H from "@/components/h/h";
import InfoCard from "@/components/InfoCard/InfoCard";
import { useRef, useEffect } from "react";
import anime from "animejs";
const HowItWorks = () => {
  const pageWidthMin = -document.documentElement.scrollWidth;
  const pageHeight = document.documentElement.scrollHeight;
  const block = useRef([]);
  let countAnim = 0;
  useEffect(() => {
    const handleScroll = () => {
      if (
        block.current &&
        window.scrollY + window.innerHeight >
          block.current[0].getBoundingClientRect().top + 4500 &&
        countAnim === 0
      ) {
        countAnim = 1;
        block.current &&
          anime({
            targets: block.current,
            translateX: [pageWidthMin, 0],
            delay: anime.stagger(100),
          });
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <div className="container_HowItWorks">
      <div className="wrapper_HowItWorks">
        <div className="nameSection" ref={(el) => (block.current[0] = el)}>
          <H classH="h3">How it works</H>
          <H classH="h4">Find out how to get started</H>
        </div>
        <div className="wrapp_InfoCard" ref={(el) => (block.current[1] = el)}>
          {imgArr.info.map((item) => (
            <div key={item.deck}>
              <InfoCard img={item.img} text={item.text} deck={item.deck} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;
