import React, { Component } from 'react';
import Video from './Video';
import Menu from './Menu';
import Content from './Content';
import './App.css';

class App extends Component {
   render() {
      return (
         <div className="App">
            <div className="Logo">
               <img alt="" src="./img/Group.svg" />
            </div>
            <Menu />
            <Content />
            <Video />
         </div>
      );
   }
}

export default App;
