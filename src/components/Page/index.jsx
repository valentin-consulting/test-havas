import PropTypes from "prop-types";
import "./style.scss";

export default function Page(props) {
  return (
    <section className="Page">
      <div className="Page__inner">
        <h1>{props.title}</h1>
        {props.children}
      </div>
    </section>
  );
}

Page.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node,
};
