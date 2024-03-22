"use client";
import H from "@/components/h/h";
import "./subscribeWidget.scss";
import InputSubscribe from "@/widgets/inputSubscribe/inputSubscribe";
import Image from "next/image";
import photo from "@/img/home/subscribeWidgetSection/Photo.png";
import EnvelopeSimple from "@/img/home/subscribeWidgetSection/EnvelopeSimple.svg";
import { useRef, useEffect } from "react";
import anime from "animejs";
const SubscribeWidget = () => {
  const img = useRef(null);
  const text = useRef(null);
  let countAnim = 0;
  const pageWidthMin = -document.documentElement.scrollWidth;
  const pageHeight = document.documentElement.scrollHeight;
  useEffect(() => {
    const handleScroll = () => {
      if (
        text.current &&
        window.scrollY + window.innerHeight >
          text.current.getBoundingClientRect().top + 5000 &&
        countAnim === 0
      ) {
        countAnim = 1;
        anime({
          targets: img.current,
          translateX: [pageWidthMin, 0],
          delay: anime.stagger(100),
        });
        anime({
          targets: text.current,
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
    <div className="container_SubscribeWidget">
      <div className="wrapper_SubscribeWidget">
        <div className="containerImgSubscribeWidget" ref={img}>
          <Image src={photo} alt="" />
        </div>
        <div className="containerTextSubscribeWidget" ref={text}>
          <div className="block_h_SubscribeWidget">
            <H classH={"h3"}>Join our weekly digest</H>
            <H classH={"h4"}>
              Get exclusive promotions & updates straight to your inbox.
            </H>
          </div>
          <div className="input_coutainer_SubscribeWidget">
            <InputSubscribe img={EnvelopeSimple} classBtn={"imginput"} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SubscribeWidget;
