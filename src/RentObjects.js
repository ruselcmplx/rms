import React, { Component } from 'react';

class RentObjects extends Component {
   handleItemClick(id) {
      console.log(id);
   }

   render() {
      const tab = this.props.tab;
      return <div className="RentObjects">{tab}</div>;
   }
}

export default RentObjects;
