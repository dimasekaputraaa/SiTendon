import "zingchart/es6";
import ZingChart from "zingchart-react";
// EXPLICITLY IMPORT MODULE
import "zingchart/modules-es6/zingchart-depth.min.js";

const GaugeComponent = () => {
  const gaugeConfig = {
    type: "gauge",
    globals: {
      fontSize: 15,
    },
    plot: {
      size: "100%",
      animation: {
        effect: "2",
        method: "3",
        sequence: "ANIMATION_BY_PLOT",
        speed: "10000",
      },

      valueBox: {
        placement: "center",
        text: "%v", // %v adalah placeholder untuk nilai
        fontSize: 15,
        rules: [
          {
            rule: "%v >= 80",
            text: "Keruh \n Kekeruhan",
            // backgroundColor: "#30b32d",
          },
          {
            rule: "%v >= 50 && %v <= 80",
            text: "Bening \n Kekeruhan",
            // backgroundColor: "#FFDD89",
          },
          {
            rule: "%v <= 50",
            text: "Poor \n Kekeruhan",
            // backgroundColor: "#FFA500",
          },
        ],
      },
    },
    scaleR: {
      aperture: 190,
      minValue: 0,
      maxValue: 100,
      step: 10,
      center: {
        visible: false,
      },
      tick: {
        visible: false,
      },
      item: {
        offsetR: 0,
      },
      labels: [
        "0",
        "10",
        "20",
        "30",
        "40",
        "50",
        "60",
        "70",
        "80",
        "90",
        "100",
      ],
      ring: {
        size: 30,
        rules: [
          {
            rule: "%v >= 80",
            backgroundColor: "#30b32d",
          },
          {
            rule: "%v < 80 && %v >= 50",
            backgroundColor: "#FFDD89",
          },
          {
            rule: "%v < 50",
            backgroundColor: "#FFA500",
          },
        ],
      },
    },
    series: [
      {
        values: [70], // Nilai awal
        backgroundColor: "black",
        indicator: [0.78, 0.78, 0.78, 0.78, 0.45],
      },
    ],
  };

  return (
    <div className="w-full">
      <div className="p-1 bg-white rounded-lg">
        <ZingChart data={gaugeConfig} height="250px" className="p-5" />
      </div>
    </div>
  );
};

export default GaugeComponent;
