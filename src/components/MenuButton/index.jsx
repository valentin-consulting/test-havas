import "./style.scss";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import classNames from "classnames";

export default function MenuButton(props) {
  return (
    <Link
      className={classNames(
        "MenuButton",
        props.important ? "MenuButton--important" : ""
      )}
      to={props.path}
    >
      {props.children}
    </Link>
  );
}

MenuButton.propTypes = {
  important: PropTypes.bool,
  path: PropTypes.string,
  childen: PropTypes.node,
};
