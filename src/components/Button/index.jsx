import { Button } from "@material-tailwind/react";
import PropTypes from "prop-types";
const ButtonComp = (props) => {
  let variant = props.variant;
  let color = props.color;
  let children = props.children;
  let lebar = props.lebar;
  return (
    <div className="flex gap-4">
      <Button variant={variant} color={color} className={lebar}>
        {children}
      </Button>
    </div>
  );
};
ButtonComp.propTypes = {
  variant: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
  children: PropTypes.string.isRequired,
  lebar: PropTypes.string.isRequired,
};

export default ButtonComp;
