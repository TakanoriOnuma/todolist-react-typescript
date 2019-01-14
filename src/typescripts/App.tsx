import { hot } from 'react-hot-loader/root';
import * as React from 'react';

import Test from './components/Test';

interface Props {
}
interface State {
  name: String
}
class App extends React.Component<Props, State> {
  constructor(props: Props) {
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
          text="hey!"
        />
      </div>
    );
  }
}

export default hot(App);
