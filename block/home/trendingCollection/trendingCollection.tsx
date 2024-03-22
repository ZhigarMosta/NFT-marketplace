"use client";
import "./trendingCollection.scss";
import CollectionCard from "@/widgets/collectionCard/collectionCard";
import imgArr from "@/data/home/trendingCollection/json";
import User from "@/components/user/user";
import H from "@/components/h/h";
import { useRef, useEffect } from "react";
import anime from "animejs";
const TrendingCollection = () => {
  const pageWidthMin = -document.documentElement.scrollWidth;
  const block = useRef([]);
  let countAnim = 0;
  useEffect(() => {
    const handleScroll = () => {
      if (
        block.current &&
        window.scrollY + window.innerHeight >
          block.current[1].getBoundingClientRect().top &&
        countAnim === 0
      ) {
        countAnim = 1;
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
    <div className="container_trendingCollection">
      <div className="wrapper_trendingCollection">
        <div className="nameSection" ref={(el) => (block.current[0] = el)}>
          <H classH="h3">Trending Collection</H>
          <H classH="h4">Checkout our weekly updated trending collection.</H>
        </div>
        <div
          className="wrapp_CollectionCard"
          ref={(el) => (block.current[1] = el)}
        >
          {imgArr.nft.map((item) => (
            <div>
              <CollectionCard
                logoNFT={item.nft_logo}
                NFT_img1={item.nft_Img1}
                NFT_img2={item.nft_Img2}
                textBnt={item.textCountBtn}
              />
              <div className="user_trendingCollection">
                <User
                  userWork={item.nft_name}
                  UserName={item.user_name}
                  UserImg={item.avatar_user}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TrendingCollection;
