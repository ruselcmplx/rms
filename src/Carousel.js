import React, { Component } from 'react';
import './css/Carousel.css';


const images = importAll(require.context('./logos/', false, /\.(png|jpe?g|svg)$/));

function importAll(r) {
  return r.keys().map(r);
}

function CarouselItems() {
   return images.map((image, id) => <div key={id} className="Carousel_item"><img alt='' src={image} /></div>)
}

class About extends Component {
   render() {      
      return (
         <div className="Carousel">
            {CarouselItems()}
            {CarouselItems()}
         </div>
      )
   }
}

export default About;