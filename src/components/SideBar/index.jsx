import { FaWpforms } from "react-icons/fa6";
import { GoHome } from "react-icons/go";
import { FaLaptopCode } from "react-icons/fa";
import { Link } from "react-router-dom";
const SideBar = () => {
  const Menu = [
    {
      title: "Home",
      icon: <GoHome size={23} />,
    },
    {
      title: "Monitoring",
      icon: <FaLaptopCode size={23} />,
    },
    {
      title: "Form",
      icon: <FaWpforms size={23} />,
    },
  ];
  return (
    <div className="hidden sm:inline bg-white">
      <div className="z-40 sticky top-0 min-h-screen border-r border-gray-200 sm:w-60">
        <div className="flex justify-center min-h-50 items-center mb-10 pt-12 px-1/2 ">
          <img
            src="/images/logo.png"
            alt="Logo"
            className="w-9 h-9 mr-6 hidden md:inline xs:hidden"
          />
          <div className="text-black-700 font-extrabold text-bold">
            SITENDON
          </div>
        </div>
        <div className="px-0 flex justify-center pt-10">
          <ul className="space-y-5 ">
            <div className="mb-4 ">Menu</div>
            {Menu.map((val, index) => (
              <Link
                key={index}
                to={"/" + val.title}
                state={{ title: val.title }}
              >
                {" "}
                <li className=" hover:text-indigo-700 hover:text-bold hover:cursor-pointer flex flew-row min-h-10  justify-start  items-center gap-3 text-gray-400 py-5 ">
                  <div className="sm:flex sm:justify-center">{val.icon}</div>
                  <div className="hidden sm:inline xs:hidden">{val.title}</div>
                </li>
              </Link>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
