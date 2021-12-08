import React from 'react';
import CountUp from 'react-countup';
import ReactGA from 'react-ga';

import './App.css';
import './materialize.css';
import DataHOC from './config/DataHoc';

export default class App extends React.Component {
  data = {
    totalCases: 0,
    totalDeaths: 0,
    totalVaccine: 0,
    day28Cases: 0,
    day28Deaths: 0,
    day28Vaccine: 0,
    lastUpdate: null
  };
  countDelay = 0;
  countDuration = 2.75;

  componentDidMount() {
    ReactGA.initialize('UA-160610049-1');
    ReactGA.pageview(window.location.pathname + window.location.search);
  }

  setData = (data) => {
    if (!data) {
      return;
    }
    const totalCases = data?.[0]?.features?.[0]?.attributes?.value;
    const totalDeaths = data?.[1]?.features?.[0]?.attributes?.value;
    const totalVaccine = data?.[2]?.features?.[0]?.attributes?.value;
    const day28Cases = data?.[3]?.features?.[0]?.attributes?.value;
    const day28Deaths = data?.[4]?.features?.[0]?.attributes?.value;
    const day28Vaccine = data?.[5]?.features?.[0]?.attributes?.value;
    const lastUpdate = data?.[6]?.editingInfo?.lastEditDate;

    this.data = {
      totalCases,
      totalDeaths,
      totalVaccine,
      day28Cases,
      day28Deaths,
      day28Vaccine,
      lastUpdate
    };
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
  renderSmth = (data) => JSON.stringify(data);

  renderCounter = (data) => {
    if (!data) {
      return this.preloader();
    }

    const totalCases = data?.[0]?.features?.[0]?.attributes?.value;
    const totalDeaths = data?.[1]?.features?.[0]?.attributes?.value;
    const totalVaccine = data?.[2]?.features?.[0]?.attributes?.value;
    const day28Cases = data?.[3]?.features?.[0]?.attributes?.value;
    const day28Deaths = data?.[4]?.features?.[0]?.attributes?.value;
    const day28Vaccine = data?.[5]?.features?.[0]?.attributes?.value;
    const lastUpdate = data?.[6]?.editingInfo?.lastEditDate;

    const colors = [
      'purple darken-4',
      'indigo darken-4',
      'deep-purple darken-4',
      'blue darken-4',
      'cyan darken-4',
      'green darken-4',
      'blue-grey darken-4',
      'red darken-4',
      'pink accent-4',
      'indigo accent-4',
      'light-blue darken-4',
      'light-green darken-4'
    ];
    const random = (min, max) =>
      Math.floor(Math.random() * (max - min + 1) + min);
    const randomColor = colors[random(0, colors.length - 1)];

    return (
      <div className={`card ${randomColor} z-depth-2 own-container`}>
        <span className="card-title">
          <h4 className="last-update own-card-title">
            Romania COVID-19 Stats
          </h4>
        </span>
        <div className="card-content">
          <h5 className="inline-data">
            Total Cases
            <CountUp
              start={0 || this.data.totalCases}
              end={totalCases}
              delay={this.countDelay}
              duration={this.countDuration}
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
            Total Deaths
            <CountUp
              start={0 || this.data.totalDeaths}
              end={totalDeaths}
              delay={this.countDelay}
              duration={this.countDuration}
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
            Total Vaccine Doses Administered
            <CountUp
              start={0 || this.data.totalVaccine}
              end={totalVaccine}
              delay={this.countDelay}
              duration={this.countDuration}
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
            28-Day Cases
            <CountUp
              start={0 || this.data.day28Cases}
              end={day28Cases}
              delay={this.countDelay}
              duration={this.countDuration}
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
            28-Day Deaths
            <CountUp
              start={0 || this.data.day28Deaths}
              end={day28Deaths}
              delay={this.countDelay}
              duration={this.countDuration}
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
            28-Day Cases
            <CountUp
              start={0 || this.data.day28Vaccine}
              end={day28Vaccine}
              delay={this.countDelay}
              duration={this.countDuration}
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
            <i class="material-icons btn-floating btn-small pulse red">
              &#10084;
            </i>
          </a>
        </div>
      </div>
    );
  };

  render() {
    return (
      <div className="App container">
        <div className="row">
          <div className="col s12 m12 l12">
            <DataHOC>{this.renderCounter}</DataHOC>
          </div>
        </div>
      </div>
    );
  }
}
