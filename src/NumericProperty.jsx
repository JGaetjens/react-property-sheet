import React, {Component, PropTypes} from 'react';
import {Pure, Style} from 'decorators';

@Pure()
@Style(require('css/property-sheet/numeric-property'))
export class NumericProperty extends Component {
  static displayName = 'NumericProperty';
  static propTypes = {
    valueLink: PropTypes.shape({value: PropTypes.any.isRequired, requestChange: PropTypes.func.isRequired}).isRequired,
    title: PropTypes.string.isRequired
  };

  state = {
    max:15,
    min:1
  };

  render() {
    const {title, valueLink} = this.props;
    return (
      <li className="ps-numeric-property">
        <label className="ps-main-label">{title}</label>
        <ul>
          <li className="ps-numeric-property--item">
            <input valueLink={valueLink} type="number" min={this.state.min} max={this.state.max}/>
          </li>
        </ul>
      </li>
    );
  }
}
