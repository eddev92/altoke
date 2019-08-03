import React from 'react';
import '../../styles/details.css';
import TableDetail from './table-detail';
import GaleryPicturesProducts from './galery-pictures-products';

const Details = () => {
  return (
    <div className="container main-details-product">
      <div className="row">
        <div className="col-xs-12 col-md-6 pictures-product">
          <GaleryPicturesProducts />
        </div>
        <div className="col-xs-12 col-md-6 info-product">
          <TableDetail />
          <div className="row">
            <button className="btn btn-danger btn-rounded waves-effect waves-light buy">LO QUIERO</button>
          </div>
        </div>
      </div>      
    </div>
  )
}

export default Details;
