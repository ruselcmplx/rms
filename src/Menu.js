import React, { Component } from 'react';
import './css/Menu.css';

class Menu extends Component {
   constructor(props) {
      super(props);
      this.state = {
         opened: false
      }
   }

   handleMenuClick() {
      this.props.handleMenuButtonClick();
   }

   handleMenuItemClick(id) {
      this.handleMenuClick();
      this.props.handleMenuItemClick(id);
   }

   render() {
      return (
         <div className="Menu" ref="menu">
            <div className="MenuButton" onClick={this.handleMenuClick.bind(this)}>
               <svg width="40" height="30" viewBox="0 0 40 30" fill="none">
                  <rect y="20" width="40" height="10" fill="white"/>
                  <rect width="40" height="10" fill="white"/>
               </svg>
            </div>
            <div className="MenuItems">
               <ul>
                  <li><span onClick={this.handleMenuItemClick.bind(this, 1)}>Аренда</span></li>
                  <li><span onClick={this.handleMenuItemClick.bind(this, 2)}>Услуги</span></li>
                  <li><span onClick={this.handleMenuItemClick.bind(this, 3)}>Проекты</span></li>
                  <li><span onClick={this.handleMenuItemClick.bind(this, 4)}>О нас</span></li>
               </ul>
               <div className='MenuInfo'>
                  <span>hello@rms.group</span>
                  <span>+7 987 231-77-46</span>
               </div>
            </div>
         </div>
      );
   }
}

export default Menu;
