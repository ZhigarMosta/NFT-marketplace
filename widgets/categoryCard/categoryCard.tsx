"use client";
import Image from "next/image";
import "./categoryCard.scss";
import NftName from "@/components/nftName/nftName";
import { useRef, useEffect } from "react";
import anime from "animejs";
const CategoryCard = ({ img, icon, categories_name }) => {
  const block = useRef(null);
  let countAnim = 0;
  useEffect(() => {
    const handleScroll = () => {
      if (
        block.current &&
        window.scrollY + window.innerHeight >
          block.current.getBoundingClientRect().top +2700 &&
        countAnim === 0
      ) {
        countAnim = 1;
        anime({
          targets: block.current,
          blur: 10,
          easing: "easeInOutQuad",
          duration: 4000,
          update: function () {
            block.current.style.filter = `blur(${block.current.blur}px)`;
          },
        });
        console.log(
          window.scrollY + window.innerHeight,
          block.current.getBoundingClientRect().top
        );
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <>
      <div className="categoryCard_img_block">
        <Image className="img_categoryCard" src={img} alt="" ref={block} />
        <Image className="icon_categoryCard" src={icon} alt="" />
      </div>
      <div className="wrapper_categorier_categoryCard">
        <NftName>{categories_name}</NftName>
      </div>
    </>
  );
};

export default CategoryCard;
