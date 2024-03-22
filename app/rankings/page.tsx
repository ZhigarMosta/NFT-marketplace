"use client";
import React, { useState, useEffect, useRef } from "react";
import "./rankings.scss";
import H from "@/components/h/h";
import { useUnit } from "effector-react";
import { $AllTime, $ThisMonth, $ThisWeek, $ToDay } from "@/store/Creators";
import RadioCreators from "@/widgets/NFTsCollections/radioCreators";
import Table from "@/components/table/table";
import anime from "animejs";
export default function Rankings() {
  const pageWidthMin = -document.documentElement.scrollWidth;
  const block = useRef([]);
  const [selectedOption, setSelectedOption] = useState("option1");
  const [data, setData] = useState([]);

  const Period = useUnit({
    Day: $ToDay,
    Week: $ThisWeek,
    Month: $ThisMonth,
    All: $AllTime,
  });

  const handleRadioChange = (event) => {
    setSelectedOption(event.target.value);
    if (event.target.value === "option1") {
      setData(Period.Day);
    }
    if (event.target.value === "option2") {
      setData(Period.Week);
    }
    if (event.target.value === "option3") {
      setData(Period.Month);
    }
    if (event.target.value === "option4") {
      setData(Period.All);
    }
  };

  useEffect(() => {
    setData(Period.Day);
    anime({
      targets: block.current,
      translateX: [pageWidthMin, 0],
      delay: anime.stagger(100),
    });
  }, []);
  return (
    <>
      <div className="container_filter_rankings">
        <div className="wrapper_filter_rankings">
          <div
            className="textBlockRankings"
            ref={(el) => (block.current[0] = el)}
          >
            <H classH={"h2"}>Top Creators</H>
            <H classH={"h4"}>
              Check out top ranking NFT artists on the NFT Marketplace.
            </H>
          </div>
          <RadioCreators
            selectedOption={selectedOption}
            onRadioChange={handleRadioChange}
          />
        </div>
      </div>
      <Table data={data} />
    </>
  );
}
