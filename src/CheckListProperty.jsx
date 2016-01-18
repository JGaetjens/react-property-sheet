import React, {Component, PropTypes} from 'react';
import Pure from 'react-pure-decorator';
import Style from 'react-style-decorator';

@Pure()
@Style(require('css/check'))
export class CheckListProperty extends Component {
  static displayName = 'CheckListProperty';
  static propTypes = {
    children: PropTypes.arrayOf(PropTypes.element.isRequired),
    title: PropTypes.string.isRequired
  };

  render() {
    const {title, children} = this.props;

    return (
      <li className="ps-check-list-property">
        <label className="ps-main-label">{title}</label>
        <ul>
          {children}
        </ul>
      </li>
    );
  }
}
