import React, {Component, PropTypes} from 'react';
import {Pure, Style} from 'decorators';

@Pure()
@Style(require('css/property-sheet/action-property'))
export class ActionProperty extends Component {
  static displayName = 'ActionProperty';
  static propTypes = {
    value: PropTypes.any.isRequired,
    title: PropTypes.string.isRequired
  };

  render() {
    const {title, value} = this.props;
    return (
      <li className="ps-action-property">
        <label className="ps-main-label">{title}</label>
        <ul>
          <li className="ps-action-property">
            <button className="ps-action-property--button" type="button">text</button>
          </li>
        </ul>
      </li>
    );
  }
}