import React from 'react';
import '../../styles/pre-sales.css';

const PreSaleProduct = ({ confirmOrderPreviewAndAgree = () => {}, cancelOrder, iAgree = false, productSelected = {}, confirmOrderPreview = () => {}, editOrderPreview = () => {}, orders = [], nextStepConfirmation = () => {} }) => {
  // const totallity = Object.keys(orders.quantity).reduce(order => order )
  const totalQuantity = orders && orders.map(order => order.quantity);
  const total = totalQuantity.reduce((a,b) => a + b);

  return (
    <div className="row">
      <div className="col-md-6 amount-sumary">        
        <form>
         <div class="input-group mb-2 mr-sm-2">
          <div class="input-group-prepend">
            <div class="input-group-text">TOTAL</div>
          </div>
          <input type="text" class="form-control" id="totallity" disabled={true} value={`S/. ${Number(total * productSelected.price)}`} />
        </div>
        {
          (!iAgree) ?
          <div className="row buttons-sumary">
          <p>(*) El precio mostrado ha sido calculado en base a la informacion brindada en el paso anterior</p>
            <button className="btn btn-success btn-rounded waves-effect waves-light mAuto" type="button" onClick={confirmOrderPreview}>ESTOY DE ACUERDO</button>
            <button className="btn btn-danger btn-rounded waves-effect waves-light" type="button" onClick={editOrderPreview}>EDITAR</button>
          </div>
          :
          <div className="row buttons-sumary">
            <button className="btn btn-success btn-rounded waves-effect waves-light mAuto" type="button" onClick={confirmOrderPreviewAndAgree}>REGISTRAR ENVIO</button>
            <button className="btn btn-danger btn-rounded waves-effect waves-light" type="button" onClick={cancelOrder}>CANCELAR</button>
            <div className="mAuto">              
              <p className="mTop5">(*) Es necesario registrar la informacion para emitir el comprobante y hacer el envio</p>
              <p className="mTop5">(*) Si cancelas el pedido, se perdera la informacion guardada hasta el momento</p>
            </div>
          </div>
        }        
        </form>       
      </div>
      <div className="col-md-6 table-sumary">
        <table class="table">
        <thead class="thead-dark">
          <tr>
            <th scope="col">CANTIDAD</th>
            <th scope="col">COLOR</th>
            <th scope="col">TALLA</th>
          </tr>
        </thead>
          <tbody>
            {
              (orders && orders.length) ?
              orders.map(order => 
                <tr>
                  <th scope="row">{order.quantity}</th>
                  <td>{order.color}</td>
                  <td>{order.size}</td>
                </tr>
              )
              :
              null
            }
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default PreSaleProduct;
