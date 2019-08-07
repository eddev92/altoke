import React from 'react';
import '../../styles/options.css';

const OptionsDetailProduct = ({ conFirmStep = () => {}, quoteProduct = () => {} }) => {
  return (
    <div className="row options-product">
        <div className="col-md-5 search-job text-center bbbColor">
          <h3 className="text-black" onClick={conFirmStep.bind(this, 1)}>CONFIRMAR</h3>
        </div>
        <div className="col-md-5 have-job text-center bbbColor">          
          <h3 className="text-black" onClick={conFirmStep.bind(this, 2)}>COTIZAR</h3>
        </div>
      </div>
  )
}

export default OptionsDetailProduct;
