"use client";
import React from "react";
import "./NFTsCollections.scss";

const NFTsCollections = ({
  selectedOption,
  onRadioChange,
  countNFTs,
  countCollections,
}) => {
  return (
    <div className="container_input">
      <div className="wrapper_radio">
        <label className="label_radio">
          <input
            type="radio"
            value="option1"
            checked={selectedOption === "option1"}
            onChange={onRadioChange}
            className="input_radio"
          />
          <div className="valuesRadio">
            <p className="nameCollectionsRadio">
              NFTs
              <span className="countCollections">{countNFTs}</span>
            </p>
          </div>
          <div className="line"></div>
        </label>
      </div>
      <div className="wrapper_radio">
        <label className="label_radio">
          <input
            type="radio"
            value="option2"
            checked={selectedOption === "option2"}
            onChange={onRadioChange}
            className="input_radio"
          />
          <div className="valuesRadio">
            <p className="nameCollectionsRadio">
              Collections
              <span className="countCollections">{countCollections}</span>
            </p>
          </div>
          <div className="line"></div>
        </label>
      </div>
    </div>
  );
};

export default NFTsCollections;
