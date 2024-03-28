import SideBar from "../../components/SideBar";
import FlyingNav from "../../components/FlyingNav";
import TopBar from "../../components/TopBar";
import AddNewPage from "../../components/Form/AddNewPage";

const NewPage = () => {
  return (
    <div className="w-screen min-h-screen bg-[#f3f4f6]  flex flex-row">
      <SideBar />
      <FlyingNav />
      <TopBar>
        <form className="mt-8 mb-2 w-full p-10">
          <AddNewPage />
        </form>
      </TopBar>
    </div>
  );
};

export default NewPage;
