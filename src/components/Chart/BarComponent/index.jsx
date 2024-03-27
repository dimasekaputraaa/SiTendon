import "zingchart/es6";
import ZingChart from "zingchart-react";
// EXPLICITLY IMPORT MODULE
import "zingchart/modules-es6/zingchart-depth.min.js";

const BarComponent = () => {
  const BarConfig = {
    type: "bar",

    plot: {
      stacked: true,
      barWidth: 105,
    },
    "scale-x": {
      label: {
        /* Scale Title */ text: "FALDI ASU",
      },
      labels: ["BANGSAT"] /* Scale Labels */,
    },
    series: [
      {
        values: [20],
        stack: 1,
      },
      {
        values: [5],
        stack: 1,
      },
    ],
  };

  return (
    <div className="w-40">
      <ZingChart data={BarConfig} />
    </div>
  );
};

export default BarComponent;
