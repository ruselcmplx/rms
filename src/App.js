import React, { Component } from 'react';
import Video from './Video';
import Menu from './Menu';
import Rent from './Rent';
import Services from './Services';
import Main from './Main';
import About from './About';
import './css/App.css';

class App extends Component {
   constructor(props) {
      super(props);
      this.state = {
         active: 1,
         menuOpened: false
      };
   }

   handleMenuButtonClick() {
      this.setState({
         menuOpened: !this.state.menuOpened
      });
   }

   handleMenuItemClick(id) {
      this.setState({
         active: id
      });
   }

   render() {
      const active = this.state.active;
      const video = <Video />;
      let activeArea;
      switch (active) {
         case 0:
            activeArea = <Main />;
            break;
         case 1:
            activeArea = <Rent />;
            break;
         case 2:
            activeArea = <Services />;
            break;
         case 3:
            activeArea = <About />;
            break;
         case 4:
            activeArea = <About />;
            break;
         default:
            activeArea = <Main />;
            break;
      }
      const stateClass = this.state.menuOpened ? 'Menu_opened' : 'Menu_closed';

      return (
         <div className="App" id="scroll">
            <div className="Logo">
               <img alt="" src="./img/Group.svg" />
            </div>
            <div className={'Content ' + stateClass}>
               <Menu
                  handleMenuButtonClick={this.handleMenuButtonClick.bind(this)}
                  handleMenuItemClick={this.handleMenuItemClick.bind(this)}
               />
               <div className="ActiveArea">{activeArea}</div>
            </div>
            {active ? null : video}
         </div>
      );
   }
}

export default App;
