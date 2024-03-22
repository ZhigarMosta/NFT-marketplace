"use client";
import React, { useRef, useEffect } from "react";
import "./statistics.scss";
import anime from "animejs";

const Statistics = ({ count, name }) => {
  const objPropLogEl = useRef(null);
  var myObject = {
    prop1: 0,
  };
  useEffect(() => {
    anime({
      targets: myObject,
      prop1: count,
      easing: "linear",
      round: 1,
      update: function () {
        objPropLogEl.current.innerHTML = myObject.prop1;
      },
    });
  }, []);
  return (
    <>
      <div className="wrapper_statistics">
        <p className="count_statistics">
          <span ref={objPropLogEl}>{count}</span>k+
        </p>
        <p className="name_statistics">{name}</p>
      </div>
    </>
  );
};

export default Statistics;
