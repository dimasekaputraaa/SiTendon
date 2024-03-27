import "zingchart/es6";
import ZingChart from "zingchart-react";
// EXPLICITLY IMPORT MODULE
import "zingchart/modules-es6/zingchart-depth.min.js";

const GaugeDua = () => {
  const gaugeConfig = {
    type: "ring",
    scaleR: {
      // Set to half ring
      refAngle: 180,
      aperture: 180,
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
    },

    series: [
      {
        values: [59],
        slice: "80%", //applied locally
      },
    ],
  };

  return (
    <div className="w-60">
      <ZingChart data={gaugeConfig} />
    </div>
  );
};

export default GaugeDua;
