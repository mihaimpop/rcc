import { Component } from 'react';
import { dataReq } from './Request';

export default class DataHOC extends Component {
  constructor(props) {
    super(props);
    this.state = {
      intervalId: null,
      data: null,
    };
  }

  componentDidMount() {
    const intervalId = setInterval(this.callData, 1800000);
    // store intervalId in the state so it can be accessed later:
    this.setState({ intervalId: intervalId });
    this.callData();
  }

  componentWillUnmount() {
    // use intervalId from the state to clear the interval
    clearInterval(this.state.intervalId);
  }

  callData = () => {
    dataReq()
      .then((responses) =>
        Promise.all(responses.map((response, index) => response.json())),
      )
      .then((data) => {
        console.log(data);
        this.setState({ data });
      });
  };

  render() {
    const { data } = this.state;
    return this.props.children(data);
  }
}
