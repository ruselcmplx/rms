import React, { Component } from 'react';
import Carousel from './Carousel';
import './css/About.css';

class About extends Component {
   render() {
      return (
         <div className="About">
            <div className="Logo_text">О нас</div>
            <div className="About_text">
               <p>
                  Мы занимаемся техническим обеспечением и сопровождением
                  мероприятий. Rent Media Systems 14 лет выступает в качестве
                  подрядчика на больших событиях: государственных советах,
                  коллегиях министерств, дебатах, конференциях, круглых столах,
                  концертных шоу.
               </p>
               <p>
                  В нашем распоряжении — огромная техническая база, которая
                  позволяет выполнить любые, порой кажущиеся невыполнимыми
                  задачи. Все оборудование проходит регулярное обслуживание и
                  используется только лучшими профессионалами индустрии, которых
                  мы по крупицам собирали со всей страны.
               </p>
               <p>
                  Наша команда — это люди, зарекомендовавшие себя как образцовые
                  работники, которые всегда думают о решении задач заказчика и
                  качественном техническом воплощении задач. Доказательство
                  этому — работа на лучших отечественных и зарубежных проектах и
                  самое главное — отсутствие форс-мажоров.
               </p>
            </div>
            <div className="About_offer">
               <svg
                  width="40"
                  height="50"
                  viewBox="0 0 40 50"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
               >
                  <path
                     fillRule="evenodd"
                     clipRule="evenodd"
                     d="M40 0H20L10 10L0 20V40V50H10H30H40V40V10V0ZM30 10H10V40H30V10Z"
                     fill="white"
                  />
               </svg>
               <div className="About_offer-text">Коммерческое предложение</div>
            </div>
            <div className="About_carousel">
               <Carousel />
            </div>
         </div>
      );
   }
}

export default About;
