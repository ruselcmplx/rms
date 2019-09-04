import React, { Component } from 'react';
import './css/RentTabs.css';

class RentTab extends Component {
   constructor(props) {
      super(props);
      this.state = {
         activeTab: 'video'
      };
      this.tabs = [
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
      ];
   }

   handleTabItemClick(activeTab) {
      this.setState({ activeTab });
      this.props.handleTabItemClick(activeTab);
   }

   render() {
      const tabs = this.tabs;
      const activeTab = this.state.activeTab;
      return (
         <div className="RentTabs">
            {tabs.map((item, id) => {
               return (
                  <div
                     key={id}
                     id={item.id}
                     className={
                        activeTab === item.id
                           ? 'RentTabs_tab RentTabs_tab-active'
                           : 'RentTabs_tab'
                     }
                     onClick={this.handleTabItemClick.bind(this, item.id)}
                  >
                     <div>{item.text}</div>
                  </div>
               );
            })}
         </div>
      );
   }
}

export default RentTab;
