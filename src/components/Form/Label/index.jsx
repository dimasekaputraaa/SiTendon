import PropTypes from "prop-types";
import { Typography } from "@material-tailwind/react";
const LabelComp = (props) => {
  let kelas = props.kelas;
  let children = props.children;
  return (
    <Typography variant="small" color="blue-gray" className={`${kelas}`}>
      {children}
    </Typography>
  );
};

LabelComp.propTypes = {
  children: PropTypes.node.isRequired,
  kelas: PropTypes.string,
};

export default LabelComp;
