import SideBar from "../../components/SideBar";
import FlyingNav from "../../components/FlyingNav";
import TopBar from "../../components/TopBar";
import Monitoring from "../../components/Monitoring";

const MonitoringPage = () => {
  return (
    <div className="w-max-screen min-h-screen bg-[#f3f4f6]  flex flex-row">
      <SideBar />
      <FlyingNav />
      <TopBar>
        <Monitoring />
      </TopBar>
    </div>
  );
};

export default MonitoringPage;
