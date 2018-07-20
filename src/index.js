import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { createStore } from 'redux'
import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'react-redux';
import Reducer from './Reducers/Reducer';
import Node from './components/Node/Node';

const initialTreeNode =   {
    0 : {
    id: 0,
    counter: 0,
    childIds: []
  }
}

const store = createStore(Reducer,
  initialTreeNode,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

class App extends Component {
  constructor(props){
    super(props);
    this.handlerClick = this.handlerClick.bind("this")
  }
  handlerClick() {
    console.log("fefedfdf");
  }
  render() {
    return (
      <Provider store = { store }>
        <div className="App">
          <h3 onClick={this.handlerClick}>React + Redux Task</h3>
          <Node id={0}/>
        </div>
      </Provider>
    );
  }
}

export default App

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
