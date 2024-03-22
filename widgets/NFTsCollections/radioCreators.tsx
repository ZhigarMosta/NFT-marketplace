"use client";
import React from "react";
import "./NFTsCollections.scss";

const RadioCreators = ({ selectedOption, onRadioChange }) => {
  return (
    <div className="container_inputCreators">
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
            <p className="nameCollectionsRadio">Today</p>
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
            <p className="nameCollectionsRadio">This Week</p>
          </div>
          <div className="line"></div>
        </label>
      </div>
      <div className="wrapper_radio">
        <label className="label_radio">
          <input
            type="radio"
            value="option3"
            checked={selectedOption === "option3"}
            onChange={onRadioChange}
            className="input_radio"
          />
          <div className="valuesRadio">
            <p className="nameCollectionsRadio">This Month</p>
          </div>
          <div className="line"></div>
        </label>
      </div>
      <div className="wrapper_radio">
        <label className="label_radio">
          <input
            type="radio"
            value="option4"
            checked={selectedOption === "option4"}
            onChange={onRadioChange}
            className="input_radio"
          />
          <div className="valuesRadio">
            <p className="nameCollectionsRadio">All Time</p>
          </div>
          <div className="line"></div>
        </label>
      </div>
    </div>
  );
};

export default RadioCreators;
