import PropTypes from "prop-types";
import { Typography } from "@material-tailwind/react";
const LabelComp = (props) => {
  let children = props.children;
  return (
    <Typography variant="small" color="blue-gray">
      {children}
    </Typography>
  );
};

LabelComp.propTypes = {
  children: PropTypes.node.isRequired,
};

export default LabelComp;
