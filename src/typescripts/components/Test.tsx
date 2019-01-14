import * as React from 'react';

import * as styles from './css/Test.scss';

interface IProps {
  text: string;
}
interface IState {}
export default class Test extends React.Component<IProps, IState> {
  render() {
    return (
      <div>
        Component!{this.props.text}
        <div className={styles.test}>text</div>
      </div>
    );
  }
}
