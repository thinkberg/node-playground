import React, { Component, PropTypes } from 'react'

export default class Device extends Component {
  render() {
    console.log(this.props);
    return (
      <div className="pure-g"
           onClick={this.props.onClick}
           style={{ fontWeight: this.props.updated ? 'bold' : 'normal' }}>
        <div className="pure-u">
          <img className="device-avatar-icon" alt={this.props.name} height="64" width="64" src={require('./device.png')}/>
        </div>
        <div className="pure-u-3-4"><p>{this.props.description}</p></div>
      </div>
    )
  }
}

Device.propTypes = {
  onClick: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  updated: PropTypes.bool.isRequired
};
