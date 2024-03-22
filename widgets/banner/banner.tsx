"use client";
import Image from "next/image";
import "./banner.scss";
import User from "@/components/user/user";
import imgArr from "@/data/home/heroSection/json";
const Banner = () => {
  return (
    <>
      <div className="wrapper_banner">
        {imgArr.nft.map((item) => (
          <Image className="img_banner" src={item.photo} alt="" />
        ))}
        <div className="text_wrapper">
					{imgArr.user.map((item) => (
          <User userWork={item.nft_name} UserName={item.user_name} UserImg={item.photo} />
        ))}
        </div>
      </div>
    </>
  );
};

export default Banner;
