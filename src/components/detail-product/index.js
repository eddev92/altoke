import React from 'react';
import Details from './detail';
import OptionsDetailProduct from './options';
import DetailBuy from '../buy-product/detail-buy';
import PreSaleProduct from '../buy-product/pre-sale';
import Client from '../client';

const DetailProduct = ({ client = {}, generateConstance = () => {}, cancelOrder = () => {}, handleClientInfo = () => {}, confirmOrderPreview = () => {}, confirmOrderPreviewAndAgree = () => {}, iAgree = false, editOrderPreview = () => {}, orders = [], orderPreview = {}, handleProductInfoPreview = () => {}, confirmOrderWithDetails = () => {}, addProductForOrder = () => {}, productSelected, optionForBuy, conFirmStep = () => {}, quoteProduct = () => {}, showOptions, handleMiniPicture = () => {}, selected = 0, pictures = [], chooseItem = () => {}, stepCurrently = 1, disabledButtonConfirmOrder = true, nextStepConfirmation = () => {} }) => {
  console.log(optionForBuy)
  return (
    <div>
      {(!showOptions && optionForBuy === 0) && <Details showOptions={showOptions} handleMiniPicture={handleMiniPicture} selected={selected} pictures={pictures} chooseItem={chooseItem}/>}
      {showOptions && <OptionsDetailProduct conFirmStep={conFirmStep} quoteProduct={quoteProduct} />}
      {optionForBuy === 1 && <DetailBuy orders={orders} orderPreview={orderPreview} handleProductInfoPreview={handleProductInfoPreview} confirmOrderWithDetails={confirmOrderWithDetails} disabledButtonConfirmOrder={disabledButtonConfirmOrder} addProductForOrder={addProductForOrder} productSelected={productSelected} pictures={pictures} handleMiniPicture={handleMiniPicture} selected={selected} /> }
      {optionForBuy === 2 && <PreSaleProduct confirmOrderPreview={confirmOrderPreview} confirmOrderPreviewAndAgree={confirmOrderPreviewAndAgree} iAgree={iAgree} productSelected={productSelected} orders={orders} editOrderPreview={editOrderPreview} nextStepConfirmation={nextStepConfirmation} /> }
      {optionForBuy === 3 && <Client client={client} generateConstance={generateConstance} cancelOrder={cancelOrder} handleClientInfo={handleClientInfo} /> }
    </div>
  )
}

export default DetailProduct;
