import * as React from "react";
import { useState, useCallback } from 'react';
import PropTypes from "prop-types";
import Progress from "./Progress";


/* global console, Excel, require */

export default class App extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      listItems: [],
    };
  }


  click = async () => {
    try {
      await Excel.run(async (context) => {
        /**
         * Insert your Excel code here
         */
        const range = context.workbook.getSelectedRange();

        // Read the range address
        range.load("address");

        // Update the fill color
        range.format.fill.color = "yellow";

        await context.sync();
        console.log(`The range address was ${range.address}.`);
      });
    } catch (error) {
      console.error(error);
    }
  };

  /*

  buildRequest = useCallback((event) => {
    setRequest({
      type: 'Excel',
      prompt: event.target.value})
  });

  fetchRequest = async () => {
    await fetch("https://aiserver.herokuapp.com/dev_aigen", {
      method: 'POST',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify(request)
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setData(data);
      })
      .catch((err) => {
        console.log({ message: err.message });
      })
  }
  */

  render() {
    const { title, isOfficeInitialized } = this.props;
    const [request, setRequest] = useState();
    const [data, setData] = useState('');
    const [ready, setReady] = useState(false);

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
      <div className="main">
        <div className="headDiv">
          <h3 className="title">
            Array Assistant
          </h3>
        </div>
        <div className="bodyDiv">
          <div className="inputDiv">
            <h5 className="inputTitle">
              What should your formula do?
            </h5>
            <input 
              type='text' 
              className="input"  
              />
            <button className="submitButton">
              Submit
            </button>
          </div>
          <div className="outputDiv">
            <h5 className="outputTitle">
              Your formula is:
            </h5>
            <input className="output" type="text"/>
            <button className="copyButton">
              Copy to Selected Cell
            </button>
          </div>
        </div>
      </div>
    );
  }
}

App.propTypes = {
  title: PropTypes.string,
  isOfficeInitialized: PropTypes.bool,
};
