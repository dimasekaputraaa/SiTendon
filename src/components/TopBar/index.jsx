import { IoIosNotifications } from "react-icons/io";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const TopBar = (props) => {
  let children = props.children;

  return (
    <div className="w-screen">
      <div className="sticky top-0 border-b border-gray-200 z-20 ">
        <div className="pt-7 min-h-20 items-center flex flex-end w-full justify-end bg-white space-x-9 items-center opacity-100 px-14">
          <h1 className="text-xl font-bold absolute left-10 inline sm:hidden">
            SITENDON
          </h1>
          <IoIosNotifications size={20} />
          <Link>
            <img
              src="/images/profil.jpeg"
              alt="user"
              className="h-10 w-10 rounded-full object-cover"
            />
          </Link>
        </div>
      </div>

      <div className=" z-0 p-5">{children}</div>
    </div>
  );
};
TopBar.propTypes = {
  children: PropTypes.node.isRequired,
};

export default TopBar;
