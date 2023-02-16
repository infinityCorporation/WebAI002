import * as React from "react";
import PropTypes from "prop-types";
import Progress from "./Progress";
import Gen from "../pages/gen";
import Main from "./Main";

export default class App extends React.Component {

  render() {
    const { title, isOfficeInitialized } = this.props;

    if (!isOfficeInitialized) {
      return (
        <Progress
          title={title}
          logo={require("./../../../assets/logo-filled.png")}
          message="Please sideload your addin to see app body."
        />
      );
    }

    return (
      <div>
        <Main />
      </div>
    );
  }
}

App.propTypes = {
  title: PropTypes.string,
  isOfficeInitialized: PropTypes.bool,
};
