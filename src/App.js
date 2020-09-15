import React from 'react';
import Header from './components/header';
import Group from './components/group';
import MessageContainer from './components/MessageContainer';
import Model from './components/modal';

import './App.css'

function App() {
  return (
    <div>
        <div className="container-fluid" id="main-container">
        <div className="row">
          <div className="col-lg-12">
            <Header></Header>
          </div>

          <div className="col-lg-3">
            <Group></Group>
          </div>
          <div className="col-lg-9">
            <MessageContainer></MessageContainer>
          </div>
        </div>
      </div>
      <Model></Model>
    </div>
    
  );
}

export default App;
