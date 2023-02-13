import * as React from "react";
import PropTypes from "prop-types";

export default class Header extends React.Component {
  render() {
    const { message } = this.props;

    return (
      <section className="ms-welcome__header ms-bgColor-neutralLighter ms-u-fadeIn500">
        <h1 className="ms-fontSize-su ms-fontWeight-light ms-fontColor-neutralPrimary">{message}</h1>
      </section>
    );
  }
}

Header.propTypes = {
  title: PropTypes.string,
  logo: PropTypes.string,
  message: PropTypes.string,
};
