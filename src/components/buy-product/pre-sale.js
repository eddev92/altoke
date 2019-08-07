import React from 'react';
import '../../styles/pre-sales.css';

const PreSaleProduct = ({ confirmOrderPreview = () => {}, editOrderPreview = () => {}, orders = [] }) => {
  // const totallity = Object.keys(orders.quantity).reduce(order => order )
  const totalQuantity = orders && orders.map(order => order.quantity);
  const total = totalQuantity.reduce((a,b) => a + b);
  console.log(total);
  return (
    <div className="row">
      <div className="col-md-6 amount-sumary">        
        <form>
         <div class="input-group mb-2 mr-sm-2">
          <div class="input-group-prepend">
            <div class="input-group-text">TOTAL</div>
          </div>
          <input type="text" class="form-control" id="totallity" disabled={true} value={`S/. ${total}`} />
        </div>
        <div className="row buttons-sumary">
          <button className="btn btn-success btn-rounded waves-effect waves-light mAuto">ESTOY DE ACUERDO</button>
          <button className="btn btn-danger btn-rounded waves-effect waves-light" onClick={editOrderPreview}>EDITAR</button>
        </div>
        </form>       
      </div>
      <div className="col-md-6 table-sumary">
        <table class="table">
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
