import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import { Coding3 } from './Components/Coding3';
import { Coding_1_2 } from './Components/Coding_1_2';

class App extends Component {


  render() {
    return (
      <div style={{ marginLeft: 15 ,}}>

        <Router>
          <div>

            <Link to="/"><p style={{ fontSize: 20, fontWeight: 'bold', display: 'inline-block' }}>Click Coding_1_2.</p></Link>
            <Link to="/Coding3"> <p style={{ fontSize: 20, fontWeight: 'bold', display: 'inline-block', marginLeft: 20 }}>Click Coding-Level 3.</p></Link>

            <Route exact path="/" component={Coding_1_2} />
            <Route path="/Coding3" component={Coding3} />
          </div>
        </Router>

      </div>
    );
  }
}

export default App;
