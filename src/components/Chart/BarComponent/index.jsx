import "zingchart/es6";
import ZingChart from "zingchart-react";
// EXPLICITLY IMPORT MODULE
import "zingchart/modules-es6/zingchart-depth.min.js";

const BarComponent = () => {
  const BarConfig = {
    type: "hbar",
    padding: 0,
    plot: {
      stacked: true,
      barWidth: 10,
    },
    "scale-y": {
      // label: {
      //   /* Scale Title */ text: "title",
      // },
      // labels: ["hai"] /* Scale Labels */,
    },
    series: [
      {
        values: [20],
        stack: 1,
      },
    ],
  };

  return (
    <div className="w-60 h-px bg-red-700">
      <ZingChart data={BarConfig} height="180"></ZingChart>
    </div>
  );
};

export default BarComponent;
