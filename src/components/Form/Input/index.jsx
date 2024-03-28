import PropTypes from "prop-types";
import { Input } from "@material-tailwind/react";

const InputComp = (props) => {
  let placeholder = props.placeholder;
  return (
    <Input
      placeholder={placeholder}
      className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
    />
  );
};

InputComp.propTypes = {
  placeholder: PropTypes.node,
};

export default InputComp;
