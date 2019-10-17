import React, { Component } from 'react';
import data from './data/rent.json';

class RentObjects extends Component {
   handleItemClick(id) {
      console.log(id);
   }

   render() {
      const tab = this.props.tab;
      const currentData = data[tab];
      return (
         <div className="RentObjects">
            {currentData.map(item => {
               return (
                  <div key={item.id} className="RentObject">
                     <img className="RentObject_img"></img>
                     <div className="RentObject_content">
                        <div className="RentObject_content-caption">
                           {item.caption}
                        </div>
                        <div className="RentObject_content-text">
                           {item.text}
                        </div>
                     </div>
                  </div>
               );
            })}
         </div>
      );
   }
}

export default RentObjects;
