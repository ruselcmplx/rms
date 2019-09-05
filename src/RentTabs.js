import React, { Component } from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import './css/RentTabs.css';

class RentTab extends Component {
   constructor(props) {
      super(props);
      this.state = {
         activeTab: 'video',
         tabs: [
            {
               id: 'video',
               text: 'видео'
            },
            {
               id: 'audio',
               text: 'звука'
            },
            {
               id: 'office_equip',
               text: 'оргтехники'
            }
         ]
      };
   }

   handleTabItemClick(index, activeTab) {
      const currentTabs = this.state.tabs;
      const sliced = currentTabs.splice(index);
      const newTabs = sliced.concat(currentTabs);
      this.setState({ tabs: sliced });
      setTimeout(() => {
         this.setState({ tabs: newTabs });
      }, 500);
      this.props.handleTabItemClick(activeTab);
   }

   render() {
      const tabs = this.state.tabs;
      return (
         <div className="RentTabs">
            <TransitionGroup component={null}>
               {tabs.map(({ id, text }, index) => (
                  <CSSTransition
                     key={id}
                     timeout={{
                        enter: 8000,
                        exit: 800
                     }}
                     appear={true}
                     classNames="Tab"
                  >
                     <div
                        className="RentTabs_tab"
                        onClick={this.handleTabItemClick.bind(this, index, id)}
                     >
                        <div>{text}</div>
                     </div>
                  </CSSTransition>
               ))}
            </TransitionGroup>
         </div>
      );
   }
}

export default RentTab;
