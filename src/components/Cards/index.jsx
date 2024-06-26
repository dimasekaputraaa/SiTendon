import PropTypes from "prop-types";
const Card = (props) => {
  let shadow = props.shadow;
  let children = props.children;
  let lebarMax = props.lebarMax;
  return (
    <div
      className={`relative flex w-full ${lebarMax} flex-col rounded-xl bg-white bg-clip-border text-gray-700 ${shadow}`}
    >
      <div className="relative mx-4 mt-4 overflow-hidden text-white shadow-lg rounded-xl bg-blue-gray-500 bg-clip-border shadow-blue-gray-500/40">
        <img
          src="https://images.unsplash.com/photo-1499696010180-025ef6e1a8f9?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=1470&amp;q=80"
          alt="ui/ux review check"
        />
        <div className="absolute inset-0 w-full h-full to-bg-black-10 bg-gradient-to-tr from-transparent via-transparent to-black/60"></div>
      </div>
      <div className="p-6">
        <div className="flex items-center justify-between mb-3">
          <h5 className="block font-sans text-xl antialiased font-medium leading-snug tracking-normal text-blue-gray-900">
            Wooden House, Florida
          </h5>
        </div>
        <p className="block font-sans text-base antialiased font-light leading-relaxed text-gray-700">
          Enter a freshly updated and thoughtfully furnished peaceful home
          surrounded by ancient trees, stone walls, and open meadows.
        </p>
      </div>
      <div className="p-6 pt-3">{children}</div>
    </div>
  );
};

Card.propTypes = {
  shadow: PropTypes.node.isRequired,
  children: PropTypes.node.isRequired,
  lebarMax: PropTypes.node.isRequired,
};

export default Card;
