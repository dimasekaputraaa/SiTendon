import PropTypes from "prop-types";
import { Input } from "@material-tailwind/react";

const InputComp = (props) => {
  let placeholder = props.placeholder;
  let kelas = props.kelas;
  return (
    <Input
      placeholder={placeholder}
      className={`${kelas} !border-t-blue-gray-200 focus:!border-t-gray-900`}
    />
  );
};

InputComp.propTypes = {
  placeholder: PropTypes.node,
  kelas: PropTypes.string,
};

export default InputComp;
