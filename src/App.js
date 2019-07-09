import React, { Component } from 'react';
import Video from './Video';
import Menu from './Menu';
import Main from './Main';
import About from './About';
import './App.css';

class App extends Component {
   constructor(props) {
      super(props);
      this.state = {
         active: 0
      }
   }
   handleMenuItemClick(id) {
      this.setState({
         active: id
      });
   }

   render() {
      const active = this.state.active;
      let activeArea;
      switch (active) {
         case 0:
            activeArea = <Main />;
            break;
         case 4:
            activeArea = <About />
            break;
         default:
            activeArea = <Main />;
            break;
      }

      return (
         <div className="App">
            <div className="Logo">
               <img alt="" src="./img/Group.svg" />
            </div>
            <Menu handleMenuItemClick={this.handleMenuItemClick.bind(this)} />
            <div className="ActiveArea">
               { activeArea }
            </div>
            <Video />
         </div>
      );
   }
}

export default App;
