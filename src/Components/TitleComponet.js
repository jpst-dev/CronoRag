import React from 'react';
import { Helmet } from 'react-helmet';
import favicon from "../assets/stopwatchIcon.png"

class App extends React.Component {
  render () {
    return (
      <div className="App">
        <Helmet>
          <title>{this.props.titleName}</title>
          <link rel="icon" type="image/png" href={favicon} sizes="16x16" />
        </Helmet>
      </div>
    );
  }
}

export default App;