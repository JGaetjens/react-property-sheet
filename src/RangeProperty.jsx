import React, {Component, PropTypes} from 'react';
import {Pure, Style} from 'decorators';

@Pure()
@Style(require('css/property-sheet/range-property'))
export class RangeProperty extends Component {
  static displayName = 'RangeProperty';
  static propTypes = {
    valueLink: PropTypes.shape({value: PropTypes.any.isRequired, requestChange: PropTypes.func.isRequired}).isRequired,
    title: PropTypes.string.isRequired,

  };

  state = {
    max:15,
    min:1
  };

  render() {
    const {title, valueLink, min, max} = this.props;
    return (
      <li className="ps-range-property">
        <label className="ps-main-label">{title}</label>
        <ul>
          <li className="ps-range-property--item">
            <input type="range" valueLink={valueLink} min={this.state.min} max={this.state.max}/>
          </li>
        </ul>
      </li>
    )
  }
}
