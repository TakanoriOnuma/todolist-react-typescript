import * as React from 'react';
import { hot } from 'react-hot-loader/root';

import Test from './components/Test';

interface IProps {}
interface IState {
  name: string;
}
class App extends React.Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);
    this.state = {
      name: 'test'
    };
  }

  render() {
    return (
      <div>
        Hello, World!
        <Test
          text='hey!'
        />
      </div>
    );
  }
}

export default hot(App);
