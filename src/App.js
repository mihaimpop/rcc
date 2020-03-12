import React from 'react';
import CountUp from 'react-countup';

import './App.css';
import DataHOC from './config/DataHoc';

export default class App extends React.Component {
  data = {
    confirmed: 0,
    country: null,
    deaths: 0,
    lastUpdate: null,
    recovered: 0,
  };

  setData = (data) => {
    if (!data) {
      return;
    }
    const { features } = data;
    const { attributes } = features[0];
    const {
      Country_Region: country,
      Confirmed: confirmed,
      Deaths: deaths,
      Recovered: recovered,
      Last_Update: lastUpdate,
    } = attributes;

    this.data = { country, confirmed, deaths, recovered, lastUpdate };
  };

  renderCounter = (data) => {
    console.log(data);
    if (!data) {
      return null;
    }

    const { features } = data;
    const { attributes } = features[0];
    const {
      Country_Region: country,
      Confirmed: confirmed,
      Deaths: deaths,
      Recovered: recovered,
      Last_Update: lastUpdate,
    } = attributes;

    return (
      <div className="container">
        <h3 className="text-center">{country} Corona Counter</h3>
        <div>
          <div className="inline-data">
            <span>Confirmed</span>
            <CountUp
              start={0 || this.data.confirmed}
              end={confirmed}
              delay={0}
              duration={2.75}
            >
              {({ countUpRef }) => {
                this.setData(data);
                return (
                  <div>
                    <span ref={countUpRef} />
                  </div>
                );
              }}
            </CountUp>
          </div>
          <div className="inline-data">
            <span>Deaths</span>
            <CountUp
              start={0 || this.data.deaths}
              end={deaths}
              delay={0}
              duration={2.75}
            >
              {({ countUpRef }) => {
                return (
                  <div>
                    <span ref={countUpRef} />
                  </div>
                );
              }}
            </CountUp>
          </div>
          <div className="inline-data">
            <span>Recovered</span>
            <CountUp
              start={0 || this.data.recovered}
              end={recovered}
              delay={0}
              duration={2.75}
            >
              {({ countUpRef }) => {
                return (
                  <div>
                    <span ref={countUpRef} />
                  </div>
                );
              }}
            </CountUp>
          </div>
        </div>
        <h6 className="text-center">
          Last update: {`${new Date(lastUpdate)}`}
        </h6>
        <div className="text-center reference">
          {'Data by '}
          <a href="https://gisanddata.maps.arcgis.com/apps/opsdashboard/index.html#/bda7594740fd40299423467b48e9ecf6">
            John Hopkins University
          </a>
        </div>
        {/* <div className="text-center reference">
          <label>Update interval: </label>
          <input type="number"></input>
        </div> */}
      </div>
    );
  };

  render() {
    return (
      <div className="App">
        <DataHOC>{this.renderCounter}</DataHOC>
      </div>
    );
  }
}
