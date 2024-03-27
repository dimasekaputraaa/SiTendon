import Card from "../../components/Cards";
import BarComponent from "../../components/Chart/BarComponent";
import GaugeComponent from "../../components/Chart/GaugeComponent";
const MonitoringPageDetails = () => {
  return (
    <div className="w-full flex flex-row justify-center gap-5">
      <div>
        <Card shadow="shadow-none" />
      </div>
      <div className="w-1/2 p-5 bg-white rounded-xl">
        <GaugeComponent />
        <div className="flex flex-row justify-between">
          <BarComponent />
          <BarComponent />
        </div>
      </div>
    </div>
  );
};

export default MonitoringPageDetails;
