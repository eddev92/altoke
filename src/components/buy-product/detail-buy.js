import React from 'react';
import '../../styles/detail-buy.css';
import GaleryPicturesProducts from '../detail-product/galery-pictures-products';

const DetailBuy = ({ orders = [], orderPreview = {}, handleProductInfoPreview = () => {}, handleMiniPicture = () => {}, selected, pictures = [], confirmOrderWithDetails = () => {}, disabledButtonConfirmOrder = true, addProduct = false, addProductForOrder = () => {}, disabledButtonAddProduct = true }) => {
  return (
    <div className="container main-details-product">
        <div className="row">
        <div className="col-xs-12 col-md-6">
          <form>
            <div class="input-group mb-2 mr-sm-2">
              <div class="input-group-prepend">
                <div class="input-group-text">Cantidad</div>
              </div>
              <input type="number" class="form-control" id="quantity" value={orderPreview.quantity} onChange={handleProductInfoPreview} placeholder="Cuantas unidades deseas?" />
            </div>
            <div class="col-auto my-1 pZero">
              <label class="mr-sm-2" for="inlineFormCustomSelect">Color</label>
              <select class="custom-select mr-sm-2" id="color" value={orderPreview.color} onChange={handleProductInfoPreview}>
                <option selected>Escoge un color</option>
                <option value="BLUE">Azul</option>
                <option value="LIGHTBLUE">Celeste</option>
                <option value="BLACK">Negro</option>
              </select>
            </div>
            <div class="col-auto my-1 pZero">
              <label class="mr-sm-2" for="inlineFormCustomSelect">Talla</label>
              <select class="custom-select mr-sm-2" id="size" value={orderPreview.size} onChange={handleProductInfoPreview}>
                <option selected>{orderPreview.size || 'Escoge la talla'}</option>
                <option value="SMALL">S</option>
                <option value="MEDIUM">M</option>
                <option value="LARGE">L</option>
              </select>
            </div>
          </form>
          <div className="row add-product">
            <button className="btn btn-success btn-rounded waves-effect waves-light buy mTop5" onClick={addProductForOrder}>AGREGAR PRODUCTO</button>
          </div>
          {
            (!addProduct && orders && orders.length) ? 
              
              <ul className="row list-order">     
                {
                  orders.map(order => <li>2 unidades, color rojo de talla M.</li>)
                }
              </ul>
              :
              null
          }
          <div className="row confirm-product">
            <button className="btn btn-danger btn-rounded waves-effect waves-light buy" onClick={confirmOrderWithDetails} disabled={orders.length === 0}>CONFIRMAR</button>
          </div>
        </div>
        <div className="col-xs-12 col-md-6">
        <GaleryPicturesProducts handleMiniPicture={handleMiniPicture} selected={selected} pictures={pictures} />
          <div className="row">S/. 50.00</div>
        </div>
      </div>
    </div>
  )
}

export default DetailBuy;
