import React, {Component, PropTypes} from 'react';
import {Pure, Style} from 'decorators';


@Pure()
@Style(require('css/property-sheet/radio'))
export class RadioListProperty extends Component {
  static displayName = 'RadioListProperty';
  static propTypes = {
    children: PropTypes.arrayOf(PropTypes.element.isRequired),
    title: PropTypes.string.isRequired
  };

  render() {
    const {title, children} = this.props;

    return (
      <li className="ps-radio-list-property">
        <label className="ps-main-label">{title}</label>
        <ul>
          {children}
        </ul>
      </li>
    );
  }
}
