"use client";
import React, { useRef, useEffect } from "react";
import Image from "next/image";
import "./artistCard.scss";
import NftName from "@/components/nftName/nftName";
import anime from "animejs";
const ArtistCard = ({ id, avatar, user_name, sales }) => {
  const objPropLogEl = useRef(null);
  const userImg = useRef(null);
  let countAnim = 0;
  var myObject = {
    prop1: 0,
  };
  useEffect(() => {
    const handleScroll = () => {
      if (
        objPropLogEl.current &&
        window.scrollY + window.innerHeight >
          objPropLogEl.current.getBoundingClientRect().top +1600 &&
        countAnim === 0
      ) {
        countAnim = 1;
        anime({
          targets: myObject,
          prop1: sales,
          easing: "linear",
          round: 0,
          update: function () {
            const roundedValue = parseFloat(myObject.prop1).toFixed(2); // Округление числа до 2 знаков после запятой
            objPropLogEl.current.innerHTML = roundedValue;
          },
        });
        anime({
          targets: userImg.current,
          scale: {
            value: 2,
            duration: 1600,
            delay: 20,
            easing: "easeInOutQuart",
          },
        });
      }
    };
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <>
      <div className="wrapper_id_artistCard">
        <p className="id_artistCard">{id}</p>
      </div>
      <div className="wrapper_artistCard">
        <div className="wrapper_avatarArtistCard">
          <Image
            className="avatarArtistCard"
            src={avatar}
            alt=""
            ref={userImg}
          />
        </div>
        <div className="artistCard_userName"></div>
        <NftName>{user_name}</NftName>
        <div className="wrapper_sales_artistCard">
          <p className="artistCard_TotalSales">Total Sales</p>
          <p className="artistCard_Sales">
            <span ref={objPropLogEl}>{sales}</span> ETH
          </p>
        </div>
      </div>
    </>
  );
};

export default ArtistCard;
