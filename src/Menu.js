import React, { Component } from 'react';
import './Menu.css';

class Menu extends Component {
   constructor(props) {
      super(props);
      this.state = {
         opened: false
      }
   }

   handleMenuClick() {
      this.setState({
         opened: !this.state.opened
      });
   }

   handleMenuItemClick(id) {
      this.handleMenuClick();
      this.props.handleMenuItemClick(id);
   }

   render() {
      const isOpened = this.state.opened ? 'Menu_opened' : '';
      const menuClass = 'Menu ' + isOpened;
      return (
         <div className={menuClass} ref="menu">
            <div className="MenuButton" onClick={this.handleMenuClick.bind(this)}>
               <svg width="40" height="30" viewBox="0 0 40 30" fill="none">
                  <rect y="20" width="40" height="10" fill="white"/>
                  <rect width="40" height="10" fill="white"/>
               </svg>
            </div>
            <div className="MenuItems">
               <ul>
                  <li onClick={this.handleMenuItemClick.bind(this, 1)}>Аренда</li>
                  <li onClick={this.handleMenuItemClick.bind(this, 2)}>Услуги</li>
                  <li onClick={this.handleMenuItemClick.bind(this, 3)}>Проекты</li>
                  <li onClick={this.handleMenuItemClick.bind(this, 4)}>О нас</li>
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
