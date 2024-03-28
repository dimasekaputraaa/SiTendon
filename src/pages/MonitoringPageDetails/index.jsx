import SideBar from "../../components/SideBar";
import FlyingNav from "../../components/FlyingNav";
import TopBar from "../../components/TopBar";
import DetailsPage from "../../components/DetailsPage";

const MonitoringPageDetails = () => {
  return (
    <div className="w-screen min-h-screen bg-[#f3f4f6]  flex flex-row">
      <SideBar />
      <FlyingNav />
      <TopBar>
        <DetailsPage />
      </TopBar>
    </div>
  );
};

export default MonitoringPageDetails;
