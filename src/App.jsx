import SideBar from "./components/SideBar";
import Content from "./components/Content";
import TopBar from "./components/TopBar";
import FlyingNav from "./components/FlyingNav";

function App() {
  return (
    <div className="w-screen min-h-screen bg-[#f3f4f6]  flex flex-row">
      <SideBar />
      <FlyingNav />
      <TopBar>
        <Content />
      </TopBar>
    </div>
  );
}

export default App;
