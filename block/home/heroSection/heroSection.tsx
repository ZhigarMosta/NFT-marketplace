"use client";
import React, { useRef, useEffect } from "react";
import Banner from "@/widgets/banner/banner";
import "./heroSection.scss";
import "@/components/h/h.scss";
import H from "@/components/h/h";
import Btn from "@/components/btn/btn";
import RocketLaunch from "@/img/headerSection/RocketLaunch.svg";
import Statistics from "@/components/statistics/statistics";
import anime from "animejs";
import { ROUTER } from "@/router/router.enum";
import Link from "@/node_modules/next/link";
const HeroSection = () => {
  const LeftBlockRefs = useRef([]);
  const rightBlockRefs = useRef(null);
  useEffect(() => {
    const pageWidthMin = -document.documentElement.scrollWidth;
    const pageWidthPlas = document.documentElement.scrollWidth;
    const pageHeight = document.documentElement.scrollHeight;

    anime({
      targets: LeftBlockRefs.current,
      translateX: [pageWidthMin, 0],
      delay: anime.stagger(100),
    });
    anime({
      targets: rightBlockRefs.current,
      translateY: [pageWidthMin, 0],
      duration: 1000,
      easing: "easeInOutQuad",
    });
  }, []);
  return (
    <>
      <div className="container_hero">
        <div className="wrapper_hero">
          <div className="hero_left_side">
            <div
              ref={(el) => (LeftBlockRefs.current[0] = el)}
              className="text_block_hero"
            >
              <H classH={"h1"}>Discover digital art & Collect NFTs</H>
              <H classH={"h4"}>
                NFT marketplace UI created with Anima for Figma. Collect, buy
                and sell art from more than 20k NFT artists.
              </H>
            </div>
            <div
              className="Btn_container_hero"
              ref={(el) => (LeftBlockRefs.current[1] = el)}
            >
              <Link href={ROUTER.CREATE}>
                <Btn
                  img={RocketLaunch}
                  text={"Get Started"}
                  classBtn={"btn_in_input"}
                />
              </Link>
            </div>
            <div
              ref={(el) => (LeftBlockRefs.current[2] = el)}
              className="container_statisricsHero"
            >
              <Statistics count={240} name="Total Sale" />
              <Statistics count={100} name="Auctions" />
              <Statistics count={240} name="Artists" />
            </div>
          </div>
          <div ref={rightBlockRefs}>
            <Banner />
          </div>
        </div>
      </div>
    </>
  );
};

export default HeroSection;
