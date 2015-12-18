import React, { Component, PropTypes } from 'react'
import Device from './device'

export default class DeviceList extends Component {
  render() {
    return (
      <div id="list" className="pure-u-1">
        {this.props.devices.map((device, index) =>
          <Device {...device}
            key={index}
            onClick={() => this.props.onDeviceClick(index)}/>
        )}
      </div>
    )
  }
}

DeviceList.propTypes = {
  onDeviceClick: PropTypes.func.isRequired,
  devices: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    updated: PropTypes.bool.isRequired
  }).isRequired).isRequired
};
