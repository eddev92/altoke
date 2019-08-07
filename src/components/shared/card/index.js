import React from 'react';
import '../../../styles/card.css';

const CardComponent = ({ galery = {}, buyItem = () => {}, modalProps = {} }) => {
  return (
      <div className="card col-md-3">
        <img src="./images/jeans3.jpg" alt="Denim Jeans" style={{width: '100%'}} />
        <h1>Tailored Jeans</h1>
        <p className="price">$19.99</p>
        <p>Some text about the jeans..</p>
        <p><button data-toggle="modal" data-target={modalProps.dataTarget} onClick={buyItem.bind(this, galery)}>Lo quiero ya!</button></p>
      </div>
  )
}

export default CardComponent;
