import React, { Component } from 'react';

import './css/Services.css';

class Services extends Component {
   constructor(props) {
      super(props);
      this.state = {
         activeMenuItem: 'rent',
      };
      this.children = {};
      this.sizes = {};
      this.scrollByClick = false;
   }

   componentDidMount() {
      const children = this.children;
      for (const name in children) {
         if (children.hasOwnProperty(name)) {
            const child = children[name];
            const offset = child.offsetTop;
            const height = child.offsetHeight;
            this.sizes[name] = {
               offset,
               height,
            };
         }
      }
      document
         .getElementById('scroll')
         .addEventListener('scroll', this.handleScroll.bind(this));
   }

   componentWillUnmount() {
      document
         .getElementById('scroll')
         .removeEventListener('scroll', this.handleScroll.bind(this));
   }

   getRef(el) {
      if (!el) {
         return;
      }
      const name = el.className.split('_')[1];
      this.children[name] = el;
   }

   handleServicesMenuClick(activeMenuItem) {
      this.children[activeMenuItem].scrollIntoView({
         behavior: 'smooth',
         block: 'center',
         inline: 'center',
      });
   }

   handleScroll(event) {
      const scrollTop = event.target.scrollTop + event.target.offsetHeight / 2;
      const sizes = this.sizes;
      for (var name in sizes) {
         if (sizes.hasOwnProperty(name)) {
            const sizeObj = sizes[name];
            const top = sizeObj.offset;
            const bottom = top + sizeObj.height + 30;
            if (scrollTop < bottom && scrollTop > top) {
               if (name !== this.state.activeMenuItem) {
                  this.setState({
                     activeMenuItem: name,
                  });
               }
               return;
            }
         }
      }
   }

   render() {
      const displayNone = {
         display: 'none',
      };
      const menuItems = [
         {
            id: 'rent',
            text: 'Аренда оборудования',
         },
         {
            id: 'displays',
            text: 'Светодиодные экраны',
         },
         {
            id: 'support',
            text: 'Техническое сопровождение',
         },
         {
            id: 'streams',
            text: 'Организация трансляций, конференций и телемостов',
         },
         {
            id: 'conference',
            text: 'Системы конференц-связи',
         },
         {
            id: 'translate',
            text: 'Синхронный перевод',
         },
         {
            id: 'interactive',
            text: 'Интерактивные инсталяции',
         },
         {
            id: 'video',
            text: 'Производство видео',
         },
         {
            id: 'tvbridges',
            text: 'Телемосты',
         },
         {
            id: 'offices',
            text: 'Мобильные офисы',
         },
         {
            id: 'presscentre',
            text: 'Организация пресс-центров',
         },
      ];
      const activeMenuItem = this.state.activeMenuItem;
      return (
         <div className="Services" ref="container">
            <div className="Logo_text">Услуги</div>
            <div className="Services_text" ref={this.getRef.bind(this)}>
               <div className="Services_rent" ref={this.getRef.bind(this)}>
                  <h3>Аренда оборудования</h3>
                  <p>
                     Наша техническая база позволяет реализовать проекты любого
                     масштаба и обеспечить ваше мероприятие всем необходимым:
                  </p>
                  <ul>
                     <li>Светодиодные экраны (от 3000 ₽ за м²)</li>
                     <li>Мультимедийная техника (от 1000 ₽ за ед)</li>
                     <li>Звуковые системы (от 1500 ₽ за ед)</li>
                     <li>Съемочная техника (от 3000 ₽ за ед)</li>
                     <li>Световая техника (от 1500 ₽ за ед)</li>
                  </ul>
                  <p>
                     Оборудование может быть предоставлено вместе с технической
                     группой, которая обеспечит его наибольшую эффективность и
                     упростит подготовительную работу. Наши специалисты знают
                     особенности каждого устройства, а их нахождение на площадке
                     гарантирует исправную работу всей техники и минимизирует
                     возможные риски.
                  </p>
               </div>
               <div className="Services_displays" ref={this.getRef.bind(this)}>
                  <h3>Светодиодные экраны</h3>
                  <p>
                     Светодиодный экран имеет возможность вести трансляцию
                     круглые сутки, разбивать ее на рекламные блоки нужной
                     протяженности, устанавливать количество трансляций в блоке
                     и количество дней размещения.
                  </p>
                  <p>
                     Мы организуем сдачу светодиодных экранов в аренду и прокат
                     светодиода. Используются светодиодные экраны главным
                     образом во внутренней и наружной рекламе, при проведении
                     городских массовых мероприятий, в концертных залах, на
                     вокзалах, выставках, ярмарках, стадионах, в аэропортах,
                     метро, на биржах и диспетчерских пунктах и т.д. Также
                     незаменимы видеоэкраны при трансляции изображения для
                     огромных аудиторий.
                  </p>
                  <p>
                     Видеоэкраны дают рекламодателям огромные возможности в
                     создании эффективной рекламы, которая может быть
                     графической и текстовой, динамичной и статичной,
                     черно-белой и цветной. Вместе с тем видеоэкранами
                     обеспечивается высокое качество изображения.
                  </p>
                  <h4>Стоимость от 3000 ₽ за м²</h4>
               </div>
               <div className="Services_support" ref={this.getRef.bind(this)}>
                  <h3>Техническое сопровождение</h3>
                  <p>Мы оказываем услуги по администрированию мероприятий:</p>
                  <ul>
                     <li>Разработка концепции и дизайн-проекта мероприятий</li>
                     <li>Создание видео, световых и звуковых сетапов</li>
                     <li>
                        Создание и застройка декораций и выставочных стендов
                     </li>
                     <li>Логистика и документооборот</li>
                     <li>
                        Организация монтажей и демонтажей оборудования и
                        декораций
                     </li>
                     <li>Набор и координация работы персонала</li>
                     <li>Контроль подрядчиков</li>
                     <li>Менеджмент артистов</li>
                  </ul>
                  <p>
                     Сделайте подготовку к мероприятию проще — поручите ее нам!
                     Наша команда подготовит концепцию вашего события,
                     разработает все необходимые визуальные материалы и
                     организует подготовку так, чтобы использовать ресурсы с
                     максимальной эффективностью и скоростью.
                  </p>
                  <h4>Стоимость от 15 000 ₽</h4>
               </div>
               <div className="Services_streams" ref={this.getRef.bind(this)}>
                  <h3>Организация трансляций, конференций и телемостов</h3>
                  <p>Организуем трансляции мероприятий и видеосъемку:</p>
                  <ul>
                     <li>Многокамерная съемка</li>
                     <li>Режиссура трансляции в реальном времени</li>
                     <li>Трансляции на экраны и видео-стены</li>
                     <li>Отчетные видео</li>
                  </ul>
                  <p>
                     Наша команда имеет опыт организации трансляций всех
                     возможных форматов мероприятий: конференций, презентаций,
                     музыкальных и визуальных шоу. После проведения события все
                     клиенты получают отчетное видео в заранее согласованной
                     стилистике. Положитесь на наших операторов, режиссеров и
                     монтажёров — вместе они сделали уже более 10000 часов
                     отличного контента.
                  </p>
                  <h4>Стоимость от 30 000 ₽</h4>
               </div>
               <div
                  className="Services_conference"
                  ref={this.getRef.bind(this)}
               >
                  <h3>Системы конференц-связи</h3>
                  <p>
                     Комплекс оборудования, необходимый для комфортного
                     проведения заседаний, семинаров и дискуссий, слушаний и
                     других мероприятий, где каждый должен быть услышан.
                  </p>
                  <ul>
                     <li>Несколько режимов работы</li>
                     <li>Качественный звук</li>
                     <li>Возможность проведения голосований</li>
                     <li>Совместимость с любым программным обеспечением</li>
                  </ul>
                  <h4>Стоимость от 18 000 ₽</h4>
               </div>
               <div className="Services_translate" ref={this.getRef.bind(this)}>
                  <h3>Синхронный перевод</h3>
                  <p>
                     Мы уверены, что языковой барьер не должен быть препятствием
                     в переговорах с коллегами и партнерами. Синхронный перевод
                     считается самым сложным в работе переводчика, поэтому
                     особенно важно выбрать хорошего специалиста, который
                     донесет до аудитории именно то, что сказал спикер.
                     Воспользуйтесь нашими услугами, чтобы не пропустить самое
                     важное:
                  </p>
                  <ul>
                     <li>Системы синхронного перевода</li>
                     <li>База переводчиков (все языки мира)</li>
                  </ul>
                  <h4>Стоимость от 50 000 ₽</h4>
               </div>
               <div
                  className="Services_interactive"
                  ref={this.getRef.bind(this)}
               >
                  <h3>Интерактивные инсталяции</h3>
                  <p>
                     Сделайте ваше мероприятие увлекательнее и удивите аудиторию
                     с помощью технологических решений нового поколения, которые
                     активно применяются на детских мероприятиях, в музеях,
                     экспо-центрах и других культурно-выставочных площадках.
                     Одно из решений: проекционные инсталляции отслеживают
                     движения человека и подстраивают изображение в соответствии
                     с ними. Размеры объекта и механики взаимодействия не
                     ограничены строгими рамками и могут быть оптимизированы под
                     конкретную задачу.
                  </p>
                  <h4>Стоимость от 30 000 ₽</h4>
               </div>
               <div className="Services_video" ref={this.getRef.bind(this)}>
                  <h3>Производство видео</h3>
                  <p>
                     Мы занимаемся полным циклом производства видео — для этого
                     в нашем распоряжении имеется техническая база, не
                     уступающая по возможностям и качеству оснащению крупных
                     телевизионных комплексов, а также команда специалистов,
                     которые в этих комплексах раньше работали. Мы уделяем
                     большое внимание производственной подготовке, которая
                     является главным фактором хорошего фильма. Это позволяет
                     нам с уверенностью называть себя одним из самых мощных
                     игроков на рынке.
                  </p>
                  <ul>
                     <li>Разработка сценариев</li>
                     <li>Просчет бюджетов и написание сметы</li>
                     <li>Кастинг актеров</li>
                     <li>Подготовка декораций</li>
                     <li>Монтаж и цветокоррекция</li>
                     <li>Анимация и спецэффекты</li>
                     <li>Выездная студия полного цикла</li>
                  </ul>
                  <h4>Стоимость от 10 000 ₽</h4>
               </div>
               <div className="Services_tvbridges" ref={this.getRef.bind(this)}>
                  <h3>Телемосты</h3>
                  <p>
                     Данный формат часто используется для проведения
                     переговоров, конференций, или, например, приглашения
                     спикеров, которые по разным причинам не могут физически
                     оказаться на вашем мероприятии. Мы занимаемся организацией
                     телемостов на любых расстояниях.
                  </p>
                  <ul>
                     <li>
                        Организация работы студий для телемостов по всему миру
                     </li>
                     <li>Техническое сопровождение</li>
                     <li>Режиссура телемостов в прямом эфире</li>
                  </ul>
                  <h4>Стоимость от 30 000 ₽</h4>
               </div>
               <div className="Services_offices" ref={this.getRef.bind(this)}>
                  <h3>Мобильные офисы</h3>
                  <p>
                     Для модерации и управления техническим оснащением вашего
                     мероприятия мы можем установить временный опорный пункт,
                     размещение которого не потребует согласования с владельцем
                     площадки. Офис может быть оборудован любой необходимой
                     аппаратурой под конкретные нужды. Забудьте о технических
                     проблемах на площадке!
                  </p>
                  <ul>
                     <li>Логистика</li>
                     <li>Монтаж и демонтаж</li>
                     <li>Техническое сопровождение</li>
                  </ul>
                  <h4>Стоимость от 1 000 ₽ за место</h4>
               </div>
               <div
                  className="Services_presscentre"
                  ref={this.getRef.bind(this)}
               >
                  <h3>Организация пресс-центров</h3>
                  <p>
                     Для обеспечения комфортной работы журналистов на
                     мероприятии мы оказываем услуги по проектированию,
                     обустройству и размещению пресс-центров, в которых
                     профессионалы, освещающее ваше событие, будут чувствовать
                     себя комфортно. Пространство может быть многофункциональным
                     и зонировано под конкретные требования. Все пресс-центры
                     оборудуются высокоскоростным интернетом и другими
                     коммуникациями, необходимыми для хорошей работы репортеров.
                  </p>
                  <h4>Стоимость от 1 000 ₽ за место</h4>
               </div>
               <div className="Services_videoconf" style={displayNone}>
                  <h3>Видеоконференции</h3>
                  <p>
                     Для проведения переговоров, встреч, конференций и сессий не
                     нужны утомительные перелеты и долгие часы переписок —
                     современные технологические системы позволяют собеседникам
                     чувствовать себя максимально комфортно, даже если они
                     находятся на разных материках. Такой эффект достигается за
                     счет безупречного сигнала и самого современного видео- и
                     аудио-оснащения, доступного на рынке.
                  </p>
                  <ul>
                     <li>Передача файлов любого объема</li>
                     <li>
                        Многоточечные конференции с возможностью подключать
                        участников со всего мира
                     </li>
                     <li>
                        Интерактивные возможности: инструменты для проведения
                        презентаций и вывода визуальной информации
                     </li>
                  </ul>
               </div>
            </div>
            <div className="Services_menu">
               {menuItems.map((item, id) => {
                  return (
                     <div
                        key={id}
                        id={item.id}
                        className={
                           activeMenuItem === item.id
                              ? 'Services_menu-item Services_menu-active'
                              : 'Services_menu-item'
                        }
                        onClick={this.handleServicesMenuClick.bind(
                           this,
                           item.id
                        )}
                     >
                        <span>
                           {item.text}
                        </span>
                     </div>
                  );
               })}
            </div>
         </div>
      );
   }
}

export default Services;
