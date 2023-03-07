import * as React from "react";
import PropTypes from "prop-types";
import Progress from "./Progress";
import { HashRouter, Switch, Route } from 'react-router-dom'

import Gen from '../pages/gen.js';
import Exp from "../pages/exp.js";
import Layout from "../pages/Layout.js";
import ProfileTab from "../pages/profile.js";
import Clean from "../pages/clean.js";
import Sum from "../pages/Sum";
import Random from "../pages/Random";
import Ext from "../pages/Ext.js";
import TComp from '../pages/TComp.js';
import Class from "../pages/Class";
import Trans from '../pages/Trans.js';
import Help from '../pages/Help.js';

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
        <HashRouter>
          <div>
            <Switch>
              <Route exact path="/">
                <Layout />
              </Route>
              <Route path="/gen">
                <Gen />
              </Route>
              <Route path="/exp">
                <Exp />
              </Route>
              <Route path="/clean">
                <Clean />
              </Route>
              <Route path="/sum">
                <Sum />
              </Route>
              <Route path="/rand">
                <Random />
              </Route>
              <Route path="/ext">
                <Ext />
              </Route>
              <Route path="/class">
                <Class />
              </Route>
              <Route path="/tcomp">
                <TComp />
              </Route>
              <Route path="/trans">
                <Trans />
              </Route>
              <Route path="/prof">
                <ProfileTab />
              </Route>
              <Route to="/help">
                <Help />
              </Route>
            </Switch>
          </div>
        </HashRouter>
    );
  }
}

App.propTypes = {
  title: PropTypes.string,
  isOfficeInitialized: PropTypes.bool,
};
