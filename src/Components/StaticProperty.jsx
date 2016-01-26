import React, {Component, PropTypes} from 'react';
import {Pure, Style} from 'decorators';

@Pure()
@Style(require('css/property-sheet/text-property'))
export class StaticProperty extends Component {
  static displayName = 'StaticProperty';
  static propTypes = {
    value: PropTypes.any.isRequired,
    title: PropTypes.string.isRequired
  };

  render() {
    const {title, value} = this.props;
    return (
      <li className="ps-static-property">
        <label className="ps-main-label">{title}</label>
        <ul>
          <li className="ps-static-property--item">
            {value}
          </li>
        </ul>
      </li>
    );
  }
}