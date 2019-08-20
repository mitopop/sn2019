import React from 'react';
import PropTypes from 'prop-types';

import ArrowUp from '../components/ArrowUp';
import ArrowDown from '../components/ArrowDown';

class ArrowPanel extends React.PureComponent {
  static propTypes = {
    ArrowUp: PropTypes.elementType,
    ArrowDown: PropTypes.elementType,
  };

  state = { isOpen: false };

  handleToggleClick = () => {
    const { isOpen } = this.state;
    this.setState({ isOpen: !isOpen });
  };

  render() {
    const { isOpen } = this.state;
    console.log('isOpen', isOpen);
    if (isOpen) {
      return <ArrowUp onClick={this.handleToggleClick}/>;
    } else {
      return <ArrowDown onClick={this.handleToggleClick}/>;
    }
  }
}

export default ArrowPanel;
