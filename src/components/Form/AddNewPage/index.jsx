import ButtonComp from "../../Button";
import InputComp from "../Input";
import LabelComp from "../Label";
import { Typography } from "@material-tailwind/react";

const AddNewPage = () => {
  return (
    <div className="w-full bg-white py-5 px-10 rounded-lg">
      <div>
        <Typography variant="h3" color="blue-gray" className="pb-5">
          Buat Halaman Baru
        </Typography>
        <div className="flex flex-col xl:flex-row gap-5 ">
          <div className="w-full">
            <LabelComp>Kode Alat</LabelComp>
            <InputComp placeholder="Masukan Kode Alat" />
          </div>
          <div className="w-full">
            <LabelComp>Sensor Kekeruhan</LabelComp>
            <InputComp placeholder="Sensor/Kekeruhan1" />
          </div>
        </div>
        <div className="flex flex-col xl:flex-row gap-5 pt-5">
          <div className="w-full">
            <LabelComp>Sensor WaterFlow</LabelComp>
            <InputComp placeholder="Sensor/WaterFlow1" />
          </div>
          <div className="w-full">
            <LabelComp>Sensor UltraSonik</LabelComp>
            <InputComp placeholder="Sensor/UltraSonik1" />
          </div>
        </div>
        <div className="pt-5">
          <LabelComp>Deskripsi</LabelComp>
          <InputComp placeholder="Masukan Deskripsi" />
        </div>
        <div className="flex justify-end mt-5">
          <ButtonComp variant="filled" color="blue" lebar="w-36">
            Simpan
          </ButtonComp>
        </div>
      </div>
    </div>
  );
};

export default AddNewPage;
