import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import Timeline from "./components/Timeline/Timeline";
import Header from "./Header";
import Content from "./Content";

class App extends Component {
  constructor(props){
    super(props);
  }
  render() {
    return (
      <div className="demo">
        <div className="notificationsFrame">
            <div className="panel">
                <Header/>
                <Content />
            </div>
        </div>
      </div>
    );
  }
}

export default App

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
