import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import registerServiceWorker from './registerServiceWorker';
import Timeline from "./components/Timeline/Timeline";
import Header from "./Header";
import Content from "./Content";
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import 'font-awesome/css/font-awesome.css';
import Clock from './Clock';
import FetchedTimeline from './FetchedTimeline';
import Container from './Container';

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
  render() {
    return (
      <div className="demo">
        <div className="notificationsFrame">
            <div className="panel">
                <Timeline/>
                <FetchedTimeline/>
                {/*
                <Header title="Timeline" />
                <Header title="Profile" />
                <Header title="Settings" />
                <Header title="Chat" />
                <Content activities={activities}/>*/}
                <Container/>
                <Clock/>
            </div>
        </div>
      </div>
    );
  }
}

export default App

ReactDOM.render(<App />, document.getElementById('root'));
// registerServiceWorker();
