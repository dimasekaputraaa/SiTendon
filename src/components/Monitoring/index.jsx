import { Link } from "react-router-dom";
import ButtonComp from "../Button";
import Card from "../Cards";

const Monitoring = () => {
  return (
    <div className="flex justify-center bg-[#f3f4f6]">
      <div className="gap-x-14 gap-y-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3">
        <Card shadow="shadow-lg" lebarMax="max-w-[20rem] h-full">
          <Link to="/detail">
            <ButtonComp variant="filled" color="blue-gray" lebar="w-full">
              Lihat Detail
            </ButtonComp>
          </Link>
        </Card>
        <Card shadow="shadow-lg" lebarMax="max-w-[20rem] h-full">
          <ButtonComp variant="filled" color="blue-gray" lebar="w-full">
            Lihat Detail
          </ButtonComp>
        </Card>
        <Card shadow="shadow-lg" lebarMax="max-w-[20rem] h-full">
          <ButtonComp variant="filled" color="blue-gray" lebar="w-full">
            Lihat Detail
          </ButtonComp>
        </Card>
      </div>
    </div>
  );
};

export default Monitoring;
