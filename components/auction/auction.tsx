"use client";
import "./auction.scss";
import React, { useState, useEffect } from "react";
const Auction = () => {
  const [time, setTime] = useState({
    hours: 60,
    minutes: 0,
    seconds: 0,
  });
  useEffect(() => {
    const interval = setInterval(() => {
      setTime((prevTime) => {
        if (
          prevTime.hours === 0 &&
          prevTime.minutes === 0 &&
          prevTime.seconds === 0
        ) {
          clearInterval(interval);
          return prevTime;
        }

        let updatedHours = prevTime.hours;
        let updatedMinutes = prevTime.minutes;
        let updatedSeconds = prevTime.seconds;

        if (updatedSeconds === 0) {
          if (updatedMinutes === 0) {
            updatedHours -= 1;
            updatedMinutes = 59;
          } else {
            updatedMinutes -= 1;
          }
          updatedSeconds = 59;
        } else {
          updatedSeconds -= 1;
        }

        return {
          hours: updatedHours,
          minutes: updatedMinutes,
          seconds: updatedSeconds,
        };
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);
  return (
    <div className="wrapper_Auction">
      <p className="auction">Auction ends in:</p>
      <div className="timeEnd">
        <div className="block_timeCount_nameTime">
          <p className="TimeCount">{time.hours}</p>
          <p className="nameTime">Hours</p>
        </div>
        <p className="auction_column">:</p>
        <div className="block_timeCount_nameTime">
          <p className="TimeCount">{time.minutes}</p>
          <p className="nameTime">Minutes</p>
        </div>
        <p className="auction_column">:</p>
        <div className="block_timeCount_nameTime">
          <p className="TimeCount">{time.seconds}</p>
          <p className="nameTime">Seconds</p>
        </div>
      </div>
    </div>
  );
};

export default Auction;
