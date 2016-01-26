import React, {Component, PropTypes} from 'react';
import Style from 'react-style-decorator';

@Style(require('./my-component.css'))
export class MyComponent extends Component {
  static displayName = 'MyComponent';
  static propTypes = {};
  static defaultProps = {};

  state = {};

  constructor(props) {
    super(props);
    // TODO: Delete this if you aren't using it
  }

  componentWillMount() {
    // TODO: Delete this if you aren't using it
  }

  componentDidMount() {
    // TODO: Delete this if you aren't using it
  }

  componentWillReceiveProps(props) {
    // TODO: Delete this if you aren't using it
  }

  componentWillUnmount() {
    // TODO: Delete this if you aren't using it
  }

  render() {
    return (
      <div>This is my new component!</div>
    );
  }
}
