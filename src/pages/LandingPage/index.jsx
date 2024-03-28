import SideBar from "../../components/SideBar";
import FlyingNav from "../../components/FlyingNav";
import TopBar from "../../components/TopBar";

const LandingPage = () => {
  return (
    <div className="w-screen min-h-screen bg-[#f3f4f6]  flex flex-row">
      <SideBar />
      <FlyingNav />
      <TopBar>
        <h1>Hai, Selamat datang admin</h1>
      </TopBar>
    </div>
  );
};

export default LandingPage;
