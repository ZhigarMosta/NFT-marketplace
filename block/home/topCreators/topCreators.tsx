"use client";
import "./topCreators.scss";
import ArtistCard from "@/widgets/artistCard/artistCard";
import ArrData from "@/data/home/topCreators/json";
import H from "@/components/h/h";
import Btn from "@/components/btn/btn";
import RocketLaunchDark from "@/img/home/topCreators/RocketLaunchDark.svg";
import { useRef, useEffect } from "react";
import anime from "animejs";
import { ROUTER } from "@/router/router.enum";
import Link from "@/node_modules/next/link";
const TopCreators = () => {
  const block = useRef(null);
  const pageWidthMin = -document.documentElement.scrollWidth;
  let countAnim = 0;
  useEffect(() => {
    const handleScroll = () => {
      if (
        block.current &&
        window.scrollY + window.innerHeight >
          block.current.getBoundingClientRect().top + 1600 &&
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
    <div className="container_topCreators">
      <div className="wrapper_topCreators">
        <div className="wrapper_nameSection" ref={block}>
          <div className="nameSection">
            <H classH="h3">Top creators</H>
            <H classH="h4">
              Checkout Top Rated Creators on the NFT Marketplace
            </H>
          </div>
          <div className="Btn_topCreators">
            <Link href={ROUTER.RANKINGS}>
              <Btn
                text={"View Rankings"}
                img={RocketLaunchDark}
                classBtn={"dtn_dark"}
              />
            </Link>
          </div>
        </div>
        <div className="wrapp_ArtistCard">
          {ArrData.user.map((item) => (
            <div>
              <ArtistCard
                id={item.id}
                avatar={item.user_logo}
                user_name={item.user_name}
                sales={item.TotalSales}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TopCreators;
