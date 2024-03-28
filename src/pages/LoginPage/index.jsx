import { Link } from "react-router-dom";
import ButtonComp from "../../components/Button";
import InputComp from "../../components/Form/Input";
import LabelComp from "../../components/Form/Label";

const LoginPage = () => {
  return (
    <div className="flex justify-center min-h-screen items-center">
      <img
        src="/images/bg-perumahan.jpg"
        alt=""
        className="w-full h-full object-cover absolute z-0"
      />
      <div className="h-[500px] w-3/4 grid grid-cols-1 xs:grid-cols-2 md:grid-cols-2 rounded-lg shadow-2xl z-10">
        <div className="bg-blue-700 hidden xs:block md:block w-full">
          <img
            src="https://th.bing.com/th/id/R.8e37035bb7f09990d9c7149aed6924f4?rik=hDNLj2oD5hcO7Q&riu=http%3a%2f%2fhdqwalls.com%2fwallpapers%2fabstract-lines-colorful.jpg&ehk=wuhGbZVCaaTRykyORgtcn%2fPId8GPS5dHg1SVjhCpizY%3d&risl=1&pid=ImgRaw&r=0"
            alt=""
            className="h-full w-full object-cover"
          />
        </div>
        <div className="w-full bg-white  flex min-h-full flex-col items-center justify-center p-5">
          <h1 className="text-xl tracking-normal text-slate-300 font-bold">
            Login Page
          </h1>

          <p className="text-center px-[10%] pt-1 leading-none">
            Selamat datang! masukkan nama pengguna dan kata sandi untuk
            mengakses akun Anda.
          </p>
          <form className="w-full px-[10%]">
            <div className="pt-10">
              <LabelComp kelas="text-slate-300 mb-1">Username</LabelComp>
              <InputComp placeholder="Masukkan Username" />
            </div>
            <div className="pt-5">
              <LabelComp kelas="text-slate-300 mb-1">Password</LabelComp>
              <InputComp placeholder="Masukkan Password" />
            </div>
            <div className="pt-10 px-[20%]">
              <Link to="/">
                <ButtonComp variant="filled" lebar="w-full" color="blue">
                  Login
                </ButtonComp>
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
