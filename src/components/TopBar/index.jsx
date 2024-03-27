import { IoIosNotifications } from "react-icons/io";
import PropTypes from "prop-types";
const TopBar = (props) => {
  let children = props.children;
  return (
    <div className="w-screen">
      <div className="sticky top-0 border-b border-gray-200 z-20">
        <div className="pt-7 min-h-20 flex flex-end w-full justify-end bg-white space-x-9 items-center opacity-100 px-14">
          <IoIosNotifications size={20} />
          <img
            src="/images/profil.jpeg"
            alt="user"
            className="h-10 w-10 rounded-full object-cover"
          />
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
