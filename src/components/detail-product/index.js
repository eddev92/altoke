import React from 'react';
import Details from './detail';

const DetailProduct = ({ handleMiniPicture = () => {}, selected = 0, pictures = [] }) => {
  console.log(selected)
  return (
    <Details handleMiniPicture={handleMiniPicture} selected={selected} pictures={pictures} />
  )
}

export default DetailProduct;