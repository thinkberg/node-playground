import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux'
import { addDevice, removeDevice, setVisibilityFilter, VisibilityFilters } from './redux/actions'
import Navigation from './components/nav/navigation';
import DeviceList from './components/devicelist/devicelist';

const { SHOW_ALL, SHOW_UPDATED } = VisibilityFilters;

// TODO REMOVE
import { NICE, SUPER_NICE } from './colors';
import { Counter } from './components/counter';

export class App extends Component {
  componentDidMount() {
    this.interval = setInterval(() => App.tick(this.props), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  static tick(props) {
    if (Math.random() > 0.5) {
      props.dispatch(addDevice({
        name: 'Device ' + (Math.random() * 100).toString(16),
        description: '' + (Math.random() * 1000).toString(16)
      }));
    }
  }

  render() {
    const { dispatch, visibleDevices } = this.props;
    return (
      <div id="layout" className="content pure-g">
        <Navigation />
        <DeviceList
          devices={visibleDevices}
          onDeviceClick={(index) => dispatch(removeDevice(index)) }
        />
        <div id="main">
          <Counter increment={1} color={NICE}/>
          <Counter increment={5} color={SUPER_NICE}/>
        </div>
      </div>
    );
  }
}

App.propTypes = {
  visibleDevices: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    updated: PropTypes.bool.isRequired
  }).isRequired).isRequired,
  visibilityFilter: PropTypes.oneOf([SHOW_ALL, SHOW_UPDATED]).isRequired
};

function selectDevices(devices, filter) {
  switch (filter) {
    case SHOW_ALL:
      return devices;
    case SHOW_UPDATED:
      return devices.filter((device) => device.updated);
  }
}

function select(state) {
  return {
    visibleDevices: selectDevices(state.devices, state.visibilityFilter),
    visibilityFilter: state.visibilityFilter
  }
}

export default connect(select)(App);


