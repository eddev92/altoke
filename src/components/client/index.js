import React from 'react';

const Client = ({ client = {}, generateConstance = () => {}, cancelOrder = () => {}, handleClientInfo = () => {}, Client }) => {
  return (
    <div className="container">
      <div className="row">
          <h6>INFORMACION DEL CLIENTE</h6>
          <div class="input-group mb-2 col-11 mAuto">
            <div class="input-group-prepend">
              <div class="input-group-text">Nombre completo</div>
            </div>
            <input type="text" class="form-control" id="fullName" value={client.fullName} onChange={handleClientInfo} />
          </div>
          <div class="input-group mb-2 col-xs-12 col-md-4 mAuto">
            <div class="input-group-prepend">
              <div class="input-group-text">Telefono</div>
            </div>
            <input type="text" class="form-control" id="clientPhone" value={client.clientPhone} onChange={handleClientInfo} />
          </div>
          <div class="input-group mb-2 col-xs-12 col-md-6 mAuto">
            <div class="input-group-prepend">
              <div class="input-group-text">Email</div>
            </div>
            <input type="text" class="form-control" id="clientMail" value={client.clientMail} onChange={handleClientInfo} />
          </div>
        <div className="row pZero">
          <h6>INFORMACION DE ENVIO</h6>
          <div class="input-group mb-2 col-xs-12 col-md-11 mAuto">
            <div class="input-group-prepend">
              <div class="input-group-text">Direccion</div>
            </div>
            <input type="text" class="form-control" id="shippingAddress" value={client.shippingAddress} onChange={handleClientInfo} />
          </div>
          <div class="input-group mb-2 col-xs-12 col-md-4 mAuto">
            <div class="input-group-prepend">
              <div class="input-group-text">Telefono</div>
            </div>
            <input type="text" class="form-control" id="shippingPhone" value={client.shippingPhone} onChange={handleClientInfo} />
          </div>
          <div class="input-group mb-2 col-xs-12 col-md-6 mAuto">
            <div class="input-group-prepend">
              <div class="input-group-text">Referencia</div>
            </div>
            <input type="text" class="form-control" id="shippingReference" value={client.shippingReference} onChange={handleClientInfo} />
          </div>
        </div>
      </div>
      <div className="row mTop5">
          <button className="btn btn-success btn-rounded waves-effect waves-light mAuto" onClick={generateConstance}>GENERAR CONSTANCIA</button>
          <button className="btn btn-danger btn-rounded waves-effect waves-light mAuto" onClick={cancelOrder}>CANCELAR PEDIDO</button>
          {/* <div className="mAuto">              
            <p>(*) Una vez generada la constancia, el CODIGO de pedido enviado, posee una vigencia de 3 dias habiles como maximo, antes de expirar.</p>
            <p>(*) Si cancelas el pedido, se perdera la informacion guardada hasta el momento</p>
          </div> */}
        </div>
    </div>
  )
}

export default Client;
