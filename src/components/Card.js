import React, { Component } from 'react';

class Card extends Component {
  render() {
    return (
      <div id="demo" className="carousel slide" data-ride="carousel">

  
      <ul className="carousel-indicators">
        <li data-target="#demo" data-slide-to="0" class="active"></li>
        <li data-target="#demo" data-slide-to="1"></li>
        <li data-target="#demo" data-slide-to="2"></li>
      </ul>
      

      <div className="carousel-inner">
        <div className="carousel-item active">
          <img src="file:///C:/Users/LENOVO/Pictures/download3.jpg" width="1100" height="500" />
        </div>
        <div className="carousel-item">
          <img src="images/baloon_image.png" width="1100" height="500" />
        </div>
        <div className="carousel-item">
          <img src="images/baloon_image.png"  width="1100" height="500" />
        </div>
      </div>
      
      
      <a className="carousel-control-prev" href="#demo" data-slide="prev">
        <span className="carousel-control-prev-icon"></span>
      </a>
      <a className="carousel-control-next" href="#demo" data-slide="next">
        <span className="carousel-control-next-icon"></span>
      </a>
    </div>
    
    );
  }
}

export default Card;