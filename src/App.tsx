import * as React from 'react';
import './App.css';
import UrlForm from './containers';

class App extends React.Component {
  public render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <UrlForm />
      </div>
    );
  }
}

export default App;
