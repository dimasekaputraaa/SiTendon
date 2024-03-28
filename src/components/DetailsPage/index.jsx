import Card from "../../components/Cards";
import BarComponent from "../../components/Chart/BarComponent";
import GaugeComponent from "../../components/Chart/GaugeComponent";
import ButtonComp from "../../components/Button";
import React from "react";
import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  Typography,
  DialogFooter,
} from "@material-tailwind/react";
import { Link } from "react-router-dom";
const DetailsPage = () => {
  const [open, setOpen] = React.useState(false);
  const handleDelete = () => setOpen(!open);
  return (
    <div className="flex justify-center min-h-full items-center pt-5">
      <div className=" flex flex-col justify-between xl:justify-center gap-5 xl:flex-row">
        <div>
          <Card shadow="shadow-none" lebarMax="max-w-[28rem]">
            <ButtonComp variant="text" color="gray" lebar="w-full">
              Mesin Mati
            </ButtonComp>
            <div className="flex justify-center gap-2 pt-1">
              <ButtonComp variant="filled" color="green" lebar="w-full">
                Update Data
              </ButtonComp>
              <Link onClick={handleDelete}>
                <ButtonComp variant="filled" color="red" lebar="w-full">
                  Delete
                </ButtonComp>
              </Link>
              <Dialog open={open} handler={handleDelete}>
                <DialogHeader>
                  <Typography variant="h5" color="blue-gray">
                    Your Attention is Required!
                  </Typography>
                </DialogHeader>
                <DialogBody divider className="grid place-items-center gap-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="h-16 w-16 text-red-500"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5.25 9a6.75 6.75 0 0113.5 0v.75c0 2.123.8 4.057 2.118 5.52a.75.75 0 01-.297 1.206c-1.544.57-3.16.99-4.831 1.243a3.75 3.75 0 11-7.48 0 24.585 24.585 0 01-4.831-1.244.75.75 0 01-.298-1.205A8.217 8.217 0 005.25 9.75V9zm4.502 8.9a2.25 2.25 0 104.496 0 25.057 25.057 0 01-4.496 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <Typography color="red" variant="h4">
                    You should read this!
                  </Typography>
                  <Typography className="text-center font-normal">
                    A small river named Duden flows by their place and supplies
                    it with the necessary regelialia.
                  </Typography>
                </DialogBody>
                <DialogFooter className="space-x-2">
                  <Button
                    variant="text"
                    color="blue-gray"
                    onClick={handleDelete}
                  >
                    close
                  </Button>
                  <Button variant="gradient" onClick={handleDelete}>
                    Ok, Got it
                  </Button>
                </DialogFooter>
              </Dialog>
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
