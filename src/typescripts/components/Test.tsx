import * as React from 'react';

interface Props {
  text: String
}
interface State {
}
export default class Test extends React.Component<Props, State> {
  render() {
    return (
      <div>Component!{this.props.text}</div>
    );
  }
}
