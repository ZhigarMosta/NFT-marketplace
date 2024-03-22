"use client";
import "./connect.scss";
import logo from "@/img/connect/logo.png";
import Image from "next/image";
import H from "@/components/h/h";
import WalletOptions from "@/components/WalletOptions/walletOptions";
import ArrData from "@/data/Connect/json";
import { useRef, useEffect } from "react";
import anime from "animejs";
export default function Connect() {
  const pageWidthMin = document.documentElement.scrollWidth;
  const pageHeight = -document.documentElement.scrollHeight;
  const block = useRef([]);
  const Img = useRef(null);
  useEffect(() => {
    anime({
      targets: block.current,
      translateX: [pageWidthMin, 0],
      delay: anime.stagger(100),
    });
    anime({
      targets: Img.current,
      translateY: [pageHeight, 0],
			easing: 'easeInOutExpo',
      delay: anime.stagger(100),
    });
  }, []);
  return (
    <>
      <div className="containerConnect">
        <div className="wrapperConnect">
          <div className="imgConnect" ref={Img}>
            <Image src={logo} alt="" />
          </div>
          <div className="wrapperRightSide_Connect">
            <div
              className="textBlockConnect"
              ref={(el) => (block.current[0] = el)}
            >
              <H classH={"h2"}>Connect wallet</H>
              <H classH={"h4"}>
                Choose a wallet you want to connect. There are several wallet
                providers.
              </H>
            </div>
            <div
              className="wrapp_WalletOptions"
              ref={(el) => (block.current[1] = el)}
            >
              {ArrData.connect.map((item) => (
                <WalletOptions img={item.connectLogo} text={item.connectName} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
