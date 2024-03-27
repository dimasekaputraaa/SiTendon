import Card from "../../components/Cards";
import BarComponent from "../../components/Chart/BarComponent";
import GaugeComponent from "../../components/Chart/GaugeComponent";
import ButtonComp from "../../components/Button";
const MonitoringPageDetails = () => {
  return (
    <div className="w-full flex flex-row justify-center gap-5">
      <div>
        <Card shadow="shadow-none">
          <ButtonComp variant="text" color="gray" lebar="w-full">
            Lihat Detail
          </ButtonComp>
        </Card>
      </div>
      <div className="w-1/2 p-5 bg-white rounded-xl">
        <GaugeComponent />
        <div className="flex flex-row justify-between">
          <div>
            <BarComponent />
          </div>
          <div>
            <BarComponent />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MonitoringPageDetails;
