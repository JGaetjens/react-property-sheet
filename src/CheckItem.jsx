import React, {Component, PropTypes} from 'react';
import Pure from 'react-pure-decorator';

@Pure()
export class CheckItem extends Component {
  static displayName = 'CheckItem';
  static propTypes = {
    title: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    stateProperty: PropTypes.string.isRequired,
    setState: PropTypes.func.isRequired,
    currentValue: PropTypes.string.isRequired
  };

  render() {
    const {title, value, stateProperty, setState, currentValue} = this.props;
    const id = stateProperty + value;
    const handleChange = () => setState({[stateProperty]: value});
    return (
      <li onClick={handleChange} className="ps-check-list-property--item">
        <input type="radio" name={stateProperty} id={id} value={value} onChange={handleChange} checked={value === currentValue}/>
        <label htmlFor={id}>{title}</label>
      </li>
    );
  }
}