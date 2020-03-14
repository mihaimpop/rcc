import React from 'react';
import CountUp from 'react-countup';

import './App.css';
import './materialize.css';
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

  preloader = () => (
    <div class="preloader-wrapper big active">
      <div class="spinner-layer spinner-blue-only">
        <div class="circle-clipper left">
          <div class="circle"></div>
        </div>
        <div class="gap-patch">
          <div class="circle"></div>
        </div>
        <div class="circle-clipper right">
          <div class="circle"></div>
        </div>
      </div>
    </div>
  );

  renderCounter = (data) => {
    if (!data) {
      return this.preloader();
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
      <div className="card deep-purple darken-4 z-depth-2 own-container">
        <span className="card-title">
          <h4 className="last-update">{country} Corona Counter</h4>
        </span>
        <div className="card-content">
          <h5 className="inline-data">
            Confirmed
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
          </h5>
          <h5 className="inline-data">
            Deaths
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
          </h5>
          <h5 className="inline-data">
            Recovered
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
          </h5>
        </div>
        <div className="last-update">
          <p className="text-center">
            Last update: {`${new Date(lastUpdate)}`}
          </p>
          <p className="text-center">
            {'Data by '}
            <a href="https://gisanddata.maps.arcgis.com/apps/opsdashboard/index.html#/bda7594740fd40299423467b48e9ecf6">
              John Hopkins University
            </a>
          </p>
        </div>
        {/* <div className="text-center reference">
          <label>Update interval: </label>
          <input type="number"></input>
        </div> */}
        <div className="card-action">
          <a href="https://github.com/mihaimpop/rcc/tree/master">Github</a>
          <a href="https://staythefuckhome.com/">
            #staythefuckhome{' '}
            <i class="material-icons btn-floating btn-small pulse red">❤</i>
          </a>
        </div>
      </div>
    );
  };

  render() {
    return (
      <div className="App container">
        <div class="row">
          <div class="col s12 m12 l12">
            <DataHOC>{this.renderCounter}</DataHOC>
          </div>
        </div>
      </div>
    );
  }
}
