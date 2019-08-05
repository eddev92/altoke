import React from 'react';
import '../../styles/galery-products.css';

const GaleryPicturesProducts = ({ selected, pictures = [], handleMiniPicture = () => {} }) => {
  console.log(selected)
  return (
    <div className="galery-content">
      <div className="body">
        <img src="images/jeans3.jpg" />
        <div className="mini-pictures">
          {
            pictures.length && pictures.map((pic, index) => <img className={selected === index ? 'selected' : ''} onClick={handleMiniPicture.bind(this, index)} src="images/jeans3.jpg" /> )
          }
        </div>
      </div>
      <div className="footer">

      </div>
    </div>
  )
}

export default GaleryPicturesProducts;
