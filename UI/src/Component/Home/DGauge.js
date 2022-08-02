import React, { useState, useEffect } from "react";
import { Gauge } from "@ant-design/charts";

const DGauge: React.FC = () => {
  const [gaugeValue, setGaugeValue] = useState("");
  const [gaugeBar, setGaugeBar] = useState("");

  useEffect(() => {
    let value = 50;
    setGaugeBar(value / 100);
    setGaugeValue(value);
  });

  var config = {
    percent: gaugeBar,
    range: { color: "l(0) 0:#B8E1FF 1:#3D76DD" },
    startAngle: Math.PI,
    endAngle: 2 * Math.PI,
    indicator: null,
    statistic: {
      title: {
        offsetY: -30,
        style: {
          fontSize: "40px",
          color: "#4B535E",
        },
        formatter: function formatter() {
          return gaugeValue + "%";
        },
      },
      content: {
        style: {
          fontSize: "30px",
          lineHeight: "40px",
          color: "#4B535E",
        },
        formatter: function formatter() {
          return "project";
        },
      },
    },
  };
  return <Gauge {...config} />;
};

export default DGauge;
