import React from 'react';
import CardComponent from '../shared/card';

const TableGaleriesComponent = ({ galeries = [], handleOption = () => {}, modalProps = {} }) => {
  const list = galeries && galeries.map(galery => {
    return <CardComponent galery={galery} buyItem={handleOption} modalProps={modalProps} />
   })
  return list;
}

export default TableGaleriesComponent;
