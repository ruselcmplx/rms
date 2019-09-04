import React, { Component } from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import RentObjects from './RentObjects';
import RentTabs from './RentTabs';
import './css/Rent.css';

class Rent extends Component {
   constructor(props) {
      super(props);
      this.state = {
         activeTab: 'video'
      };
   }

   handleTabItemClick(activeTab) {
      this.setState({ activeTab });
   }

   render() {
      const activeTab = this.state.activeTab;
      return (
         <div className="Rent">
            <div className="Logo_text">Аренда</div>
            <RentTabs handleTabItemClick={this.handleTabItemClick.bind(this)} />
            <div className="RentObjects_container">
               <TransitionGroup>
                  <CSSTransition
                     key={activeTab}
                     timeout={1000}
                     classNames="RentObjects"
                  >
                     <RentObjects tab={activeTab} />
                  </CSSTransition>
               </TransitionGroup>
            </div>
         </div>
      );
   }
}

export default Rent;