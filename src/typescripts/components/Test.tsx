import * as React from 'react';

interface IProps {
  text: string;
}
interface IState {}
export default class Test extends React.Component<IProps, IState> {
  render() {
    return (
      <div>Component!{this.props.text}</div>
    );
  }
}
