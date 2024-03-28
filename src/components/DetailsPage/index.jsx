import Card from "../../components/Cards";
import BarComponent from "../../components/Chart/BarComponent";
import GaugeComponent from "../../components/Chart/GaugeComponent";
import ButtonComp from "../../components/Button";
const DetailsPage = () => {
  return (
    <div className="flex justify-center min-h-full items-center pt-5">
      <div className=" flex flex-col justify-between xl:justify-center gap-5 xl:flex-row">
        <div>
          <Card shadow="shadow-none" lebarMax="max-w-[28rem]">
            <ButtonComp variant="text" color="gray" lebar="w-full">
              Mesin Mati
            </ButtonComp>
            {/* <br /> */}
            <div className="flex justify-center gap-2 pt-1">
              <ButtonComp variant="filled" color="green" lebar="w-full">
                Update Data
              </ButtonComp>
              <ButtonComp variant="filled" color="red" lebar="w-full">
                Hapus Data
              </ButtonComp>
            </div>
          </Card>
        </div>
        <div className="w-4/5 p-5 bg-white rounded-xl">
          <GaugeComponent />
          <div className="flex flex-col justify-between md:flex-row">
            <div>
              <BarComponent />
            </div>
            <div>
              <BarComponent />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailsPage;
