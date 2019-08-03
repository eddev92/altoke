import React from 'react';
import CardComponent from '../shared/card';

const TableGaleriesComponent = ({ galeries = [1,2,3,4,5,6,7,8,9], handleOption = () => {}, modalProps = {} }) => {
  const list = galeries && galeries.map(galery => {
    return <CardComponent galery={galery} buyItem={handleOption} modalProps={modalProps} />
   })
  return list;
}

export default TableGaleriesComponent;
