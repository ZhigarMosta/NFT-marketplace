"use client";
import "./discoverMoreNFTs.scss";
import ArtistCard from "@/widgets/artistCard/artistCard";
import ArrData from "@/data/home/discoverMoreNFTs/json";
import H from "@/components/h/h";
import Btn from "@/components/btn/btn";
import Eye from "@/img/home/discoverMoreNFTsSection/Eye.svg";
import NFTCard from "@/widgets/NFTCard/NFTCard";
import { useRef, useEffect } from "react";
import anime from "animejs";
import { ROUTER } from "@/router/router.enum";
import Link from "@/node_modules/next/link";
const DiscoverMoreNFTs = () => {
  const pageHeight = document.documentElement.scrollHeight;
  const block = useRef([]);
  let countAnim = 0;
  useEffect(() => {
    const handleScroll = () => {
      if (
        block.current &&
        window.scrollY + window.innerHeight >
          block.current[1].getBoundingClientRect().top + 3500 &&
        countAnim === 0
      ) {
        countAnim = 1;
        anime({
          targets: block.current,
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
    <div className="container_discoverMoreNFTs">
      <div className="wrapper_discoverMoreNFTs">
        <div
          className="wrapper_nameSection_discoverMoreNFTs"
          ref={(el) => (block.current[0] = el)}
        >
          <div className="nameSection_discoverMoreNFTs">
            <H classH="h3">Discover More NFTs</H>
            <H classH="h4">Explore new trending NFTs</H>
          </div>
          <div className="media_Btn_discoverMoreNFTs">
            <Link href={ROUTER.MARKETPLACE}>
              <Btn text={"See All"} img={Eye} classBtn={"dtn_dark"} />
            </Link>
          </div>
        </div>
        <div className="wrapp_ArtistCard" ref={(el) => (block.current[1] = el)}>
          {ArrData.nft.map((item) => (
            <div>
              <NFTCard
                nft_img={item.NFT_img}
                nft_name={item.NFT_name}
                user_name={item.user_name}
                user_avatar={item.user_avarat}
                prise={item.price}
                highestBid={item.HighestBid}
                background={item.background}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DiscoverMoreNFTs;
