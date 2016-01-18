import React, {Component, PropTypes} from 'react';
import Pure from 'react-pure-decorator';
import Style from 'react-style-decorator';
import valueLink from 'react-linkstate-decorator'

@Pure()
@Style(require('css/text-property'))
export class NoopProperty extends Component {
  static displayName = 'NoopProperty';
  static propTypes = {
    valueLink: PropTypes.shape({value: PropTypes.string.isRequired, requestChange: PropTypes.func.isRequired}).isRequired,
    title: PropTypes.string.isRequired
  };

  render() {
    const {title, valueLink} = this.props;
    return (
      <li className="ps-noop-property">
        <label className="ps-main-label">{title}</label>
        <ul>
          <li className="ps-noop-property--item">
            <input type="text" valueLink={valueLink} />
          </li>
        </ul>
      </li>
    );
  }
}