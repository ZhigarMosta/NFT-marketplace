"use client";
import Image from "next/image";
import "./NFThighlight.scss";
import ArrData from "@/data/home/NFThighlight/json";
import H from "@/components/h/h";
import Btn from "@/components/btn/btn";
import Eye from "@/img/home/discoverMoreNFTsSection/Eye.svg";
import Auction from "@/components/auction/auction";
import { useRef, useEffect } from "react";
import anime from "animejs";
import { ROUTER } from "@/router/router.enum";
import Link from "@/node_modules/next/link";
const NFThighlight = () => {
  const pageWidthMin = -document.documentElement.scrollWidth;
  const pageHeight = document.documentElement.scrollHeight;
  const block = useRef([]);
  const timer = useRef(null);
  let countAnim = 0;
  useEffect(() => {
    const handleScroll = () => {
      if (
        block.current &&
        window.scrollY + window.innerHeight >
          block.current[0].getBoundingClientRect().top + 4000 &&
        countAnim === 0
      ) {
        countAnim = 1;
        anime({
          targets: block.current,
          translateX: [pageWidthMin, 0],
          delay: anime.stagger(100),
        });
        anime({
          targets: timer.current,
          translateY: [pageHeight, 0],
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
    <div className="imageNFThighlight_container">
      <div className="wrapperNFThighlight">
        <div className="userBlock_NFThighlight">
          {ArrData.nft.map((item) => (
            <div className="container_userNFThighlight">
              <div
                className="wrapper_imd_NFThighlight"
                ref={(el) => (block.current[0] = el)}
              >
                <Image
                  className="avatarNFThighlight"
                  src={item.user_avarat}
                  alt=""
                />
                <p className="user_nameNFThighlight">{item.user_name}</p>
              </div>
              <div ref={(el) => (block.current[1] = el)}>
                <H classH={"h2"}>Magic Mashrooms</H>
              </div>
            </div>
          ))}
          <div
            className="btn_media_NFThighlight"
            ref={(el) => (block.current[2] = el)}
          >
            <Link href={ROUTER.MARKETPLACE}>
              <Btn img={Eye} classBtn={"btn_light"} text={"See NFT"} />
            </Link>
          </div>
        </div>
        <div className="wrapper_Auction_NFThighlight" ref={timer}>
          <Auction />
        </div>
      </div>
    </div>
  );
};

export default NFThighlight;
