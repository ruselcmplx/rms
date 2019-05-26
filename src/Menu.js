import React, { Component } from 'react';
import './Menu.css';

class Menu extends Component {
   constructor(props) {
      super(props);
      this.state = {
         opened: false
      }
   }

   handleClickMenu() {
      this.setState({
         opened: !this.state.opened
      });
   }

   render() {
      const isOpened = this.state.opened ? '_opened' : '_closed';
      const menuClass = 'Menu Menu' + isOpened;
      const itemsClass = 'MenuItems MenuItems' + isOpened;
      return (
         <div className={menuClass} ref="menu">
            <div className="MenuButton" onClick={this.handleClickMenu.bind(this)}>
               <svg width="40" height="30" viewBox="0 0 40 30" fill="none">
                  <rect y="20" width="40" height="10" fill="white"/>
                  <rect width="40" height="10" fill="white"/>
               </svg>
            </div>
            <div className={itemsClass}>
               <ul>
                  <li>Аренда</li>
                  <li>Услуги</li>
                  <li>Проекты</li>
                  <li>О нас</li>
               </ul>
            </div>
            <div className={itemsClass + ' MenuInfo'}>
               <span>hello@rms.group</span>
               <span>+7 987 231-77-46</span>
            </div>
         </div>
      );
   }
}

export default Menu;
