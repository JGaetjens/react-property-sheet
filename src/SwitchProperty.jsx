import React, {Component, PropTypes} from 'react';
import Toggle from 'react-input-toggle/dist/react-input-toggle';
import Pure from 'react-pure-decorator';
import Style from 'react-style-decorator';

@Pure()
@Style(require('css/react-input-toggle'), require('css/property-sheet/switch-property'))
export class SwitchProperty extends Component {
  static displayName = 'SwitchProperty';
  static propTypes = {
    valueLink: PropTypes.shape({requestChange: PropTypes.func.isRequired, value: PropTypes.any.isRequired}).isRequired,
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string
  };

  render() {
    const {title, subtitle, valueLink: {value, requestChange}} = this.props;
    return (
      <li className="ps-switch-property">
        <label className="ps-main-label">{title}</label>
        <ul>
          <li className="ps-switch-property--item">
            <Toggle label={subtitle} collapse={false} effect={'foxtrot'} labelPosition={'right'} onChange={() => !requestChange(!value)} checked={value}/>
          </li>
        </ul>
      </li>
    );
  }
}
