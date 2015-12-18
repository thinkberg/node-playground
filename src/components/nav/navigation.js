import './navigation.css';
import React, {Component} from 'react';

export default class Navigation extends Component {
  constructor(props) {
    super(props);
    this.state = {selected: '/'};
  }

  render() {
    return (
      <div id="nav" className="pure-u">
        <a href="#" className="nav-menu-button">Menu</a>

        <div className="nav-inner">
          <div className="pure-menu">
            <span className="pure-menu-heading">aviotar</span>

            <ul className="pure-menu-list">
              <li className="pure-menu-item"><a href="#!/devices" className="pure-menu-link">Devices <span className="event-count">(2)</span></a></li>
              <li className="pure-menu-item"><a href="#!/security" className="pure-menu-link">Security</a></li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}
