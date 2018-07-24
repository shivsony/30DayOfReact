import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import registerServiceWorker from './registerServiceWorker';
// import Timeline from "./components/Timeline/Timeline";
import Footer from "./components/Timeline/Footer";
import Header from "./Header";
import Content from "./Content";
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import 'font-awesome/css/font-awesome.css';

var activities = [
  {
    timestamp: new Date().getTime(),
    text: "at lunch",
    user: {
      id: 1,
      name: "Nate",
      avatar: "http://www.croop.cl/UI/twitter/images/doug.jpg"
    },
    comments: [{
      from: "ari",
      taxt : "me too!!"
    }]
  },
{
  timestamp: new Date().getTime(),
    text: "Woke up early for a beautiful run",
    user: {
      id: 2, name: 'Ari',
      avatar: "http://www.croop.cl/UI/twitter/images/doug.jpg"
    },
    comments: [{ from: 'Nate', text: 'I am so jealous' }]
  }
]

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      refreshing: false
    }
  }
  refresh() {
    this.setState({refreshing: true})
  }
  onComponentRefresh() {
    this.setState({refreshing: false});
  }
  render() {
    const {refreshing} = this.state;
    return (
      <div className="demo">
        <div className="notificationsFrame">
            <div className="panel">
                <Header title="Timeline" />
                <Content
                onComponentRefresh={this.onComponentRefresh.bind(this)} 
                activities={activities}/>
                <Footer>
                  <button onClick={this.refresh.bind(this)}>
                    <i className="fa fa-refresh" />
                    Refresh
                  </button>
                </Footer>
            </div>
        </div>
      </div>
    );
  }
}

export default App

ReactDOM.render(<App />, document.getElementById('root'));
// registerServiceWorker();
