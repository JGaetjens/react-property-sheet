import React, {Component, PropTypes} from 'react';
import Pure from 'react-pure-decorator';
import Style from 'react-style-decorator';

@Pure()
@Style(require('css/range-property'))
export class RangeProperty extends Component {
  static displayName = 'RangeProperty';
  static propTypes = {
    valueLink: PropTypes.shape({value: PropTypes.any.isRequired, requestChange: PropTypes.func.isRequired}).isRequired,
    title: PropTypes.string.isRequired,
  };

  state = {
    max:5,
    min:1,
    currValue: 3
  };

  render() {
    const {title, valueLink: {value}} = this.props;
    const {max, min, currValue} = this.state;
    const handleChange = () => setState({currValue: value});
    return (
      <li onClick={handleChange} className="ps-range-property">
        <label className="ps-main-label">{title}</label>
        <ul>
          <li className="ps-range-property--item">
            <input type="range" valueLink={valueLink} min={min} max={max} onChange={handleChange} value={currValue} />
          </li>
        </ul>
      </li>
    )
  }
}
