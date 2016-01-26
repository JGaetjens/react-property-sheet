import React, {Component, PropTypes} from 'react';
import {Pure, Style} from 'decorators';
import Collapse from 'react-collapse';
import {Icon} from 'components/Icon';

@Pure()
@Style(require('css/property-sheet/group'))
export class Group extends Component {
  static displayName = 'Group';
  static propTypes = {
    title: PropTypes.string,
    children: PropTypes.any
  };

  state = {opened: true};

  render() {
    const {opened} = this.state;
    const {title, children} = this.props;
    return (
      <div className="ps-group">
        <h3 className="ps-group-banner">
          <a className="ps-group-toggle" onClick={() => this.setState({opened: !opened})}>
            <Icon name={opened ? 'toggle-up' : 'toggle-down'}/>
          </a>
          {title}
          <span className="ps-group-banner--wedge" style={{display: !opened ? 'none' : 'inherit'}} />
        </h3>
        <Collapse isOpened={opened}>
          <ul>
            {children}
          </ul>
        </Collapse>
      </div>
    );
  }
}
