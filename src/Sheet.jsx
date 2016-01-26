import React, {Component, PropTypes} from 'react';
import Draggable from 'react-draggable';
import {Style, Pure} from 'decorators';
import {Group} from './';

@Pure()
@Style(require('css/property-sheet/sheet'))
export class Sheet extends Component {
  static displayName = 'Sheet';
  static propTypes = {
    children: PropTypes.arrayOf(PropTypes.element.isRequired)
  };

  state = {className: 'ps-sheet'};

  _onStart(e) {
    this.setState({className: 'ps-sheet--dragging'});
    e.preventDefault();
  }

  _onStop(e) {
    this.setState({className: 'ps-sheet'});
    e.preventDefault();
  }

  _onDrag(e) {
    e.preventDefault();
  }

  render() {
    const {children} = this.props;
    const {className} = this.state;
    const contents = children.filter(x => x.type.displayName === 'Group').length ? children : (
      <Group>
        {children}
      </Group>
    );
    return (
      <Draggable bounds="parent" handle=".ps-group-banner" onStart={::this._onStart} onDrag={::this._onDrag} onStop={::this._onStop}>
        <div className={className}>
          {contents}
        </div>
      </Draggable>
    );
  }
}
