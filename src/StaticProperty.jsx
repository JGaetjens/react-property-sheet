import React, {Component, PropTypes} from 'react';
import Pure from 'react-pure-decorator';
import Style from 'react-style-decorator';

@Pure()
@Style(require('css/text-property'))
export class StaticProperty extends Component {
  static displayName = 'StaticProperty';
  static propTypes = {
    valueLink: PropTypes.shape({value: PropTypes.string.isRequired, requestChange: PropTypes.func.isRequired}).isRequired,
    title: PropTypes.string.isRequired
  };

  render() {
    const {title, valueLink} = this.props;
    return (
      <li className="ps-static-property">
        <label className="ps-main-label">{title}</label>
        <ul>
          <li className="ps-static-property--item">
            <label type="text" valueLink={valueLink} />
          </li>
        </ul>
      </li>
    );
  }
}