"use client";
import React, { useState, useEffect, useRef } from "react";
import Input from "@/components/input/input";
import "./marketplace.scss";
import MagnifyingGlass from "@/img/marketplace/MagnifyingGlass.svg";
import H from "@/components/h/h";
import NFTsCollections from "@/widgets/NFTsCollections/NFTsCollections";
import { useUnit } from "effector-react";
import { $NFTs, $Collections } from "@/store/NFT";
import NFTCard from "@/widgets/NFTCard/NFTCard";
import anime from "animejs";
export default function Marketplace() {
  const pageWidthMin = -document.documentElement.scrollWidth;
  const block = useRef([]);
  const [selectedOption, setSelectedOption] = useState("option1");
  const [data, setData] = useState([]);
  const [dataFilter, setDataFilter] = useState([]);

  const StoreNft = useUnit({
    storeNFT: $NFTs,
    storeCollections: $Collections,
  });

  const handleRadioChange = (event) => {
    setSelectedOption(event.target.value);
    if (event.target.value === "option1") {
      setData(StoreNft.storeNFT);
      setDataFilter(StoreNft.storeNFT);
    }
    if (event.target.value === "option2") {
      setData(StoreNft.storeCollections);
      setDataFilter(StoreNft.storeCollections);
    }
  };

  useEffect(() => {
    setData(StoreNft.storeNFT);
    setDataFilter(StoreNft.storeNFT);
    anime({
      targets: block.current,
      translateX: [pageWidthMin, 0],
      delay: anime.stagger(100),
    });
  }, []);
  const search = async (query) => {
    if (!query) {
      data;
    }
    return data.filter((data) => data.NFTname.includes(query));
  };

  const hendleChenge = async (e) => {
    const newList = await search(e.target.value);
    console.log(e.target.value);
    setDataFilter(newList);
    console.log(dataFilter);
  };

  return (
    <>
      <div className="container_filter_marketplace">
        <div className="wrapper_filter_marketplace">
          <div
            className="textBlockMarketplace"
            ref={(el) => (block.current[0] = el)}
          >
            <H classH={"h2"}>Browse Marketplace</H>
            <H classH={"h4"}>
              Browse through more than 50k NFTs on the NFT Marketplace.
            </H>
          </div>
          <div className="InputMedia" ref={(el) => (block.current[1] = el)}>
            <Input
              img={MagnifyingGlass}
              placeholder={"Search your favourite NFTs"}
              type={"text"}
              typeClass={"dark"}
              func={hendleChenge}
            />
          </div>
        </div>
      </div>
      <div className="lineMark"></div>
      <div className="container_filter_marketplace">
        <div className="wrapper_filter_marketplace">
          <NFTsCollections
            selectedOption={selectedOption}
            onRadioChange={handleRadioChange}
            countNFTs={StoreNft.storeNFT.length}
            countCollections={StoreNft.storeCollections.length}
          />
        </div>
      </div>
      <div className="container_Card_marketplace">
        <div className="wrapper_Card_marketplace">
          {dataFilter &&
            dataFilter.map((item) => (
              <div>
                <NFTCard
                  nft_img={item.imgNFT}
                  nft_name={item.NFTname}
                  user_name={item.userName}
                  user_avatar={item.imgUser}
                  prise={item.prise}
                  highestBid={item.highestBid}
                  background={item.background}
                />
              </div>
            ))}
        </div>
      </div>
    </>
  );
}
