import React, {Component, PropTypes} from 'react';
import {Pure, Style} from 'decorators';

@Pure()
@Style(require('css/property-sheet/text-property'))
export class TextProperty extends Component {
  static displayName = 'TextProperty';
  static propTypes = {
    valueLink: PropTypes.shape({value: PropTypes.string.isRequired, requestChange: PropTypes.func.isRequired}).isRequired,
    title: PropTypes.string.isRequired
  };

  render() {
    const {title, valueLink} = this.props;
    return (
      <li className="ps-text-property">
        <label className="ps-main-label">{title}</label>
        <ul>
          <li className="ps-text-property--item">
            <input type="text" valueLink={valueLink} />
          </li>
        </ul>
      </li>
    );
  }
}