import React from 'react';
import '../../../styles/modal.css';

const ModalComponent = ({ title = '', children = null, idTargetModal = '', closeModal = () => {} }) => {
  return (
<div className="modal fade bd-example-modal-lg" id={idTargetModal} tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div className="modal-dialog modal-lg" role="document">
    <div className="modal-content">
      <div className="modal-header">
        <h5 className="modal-title" id="exampleModalLabel">{title}</h5>
        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div className="modal-body">
        {children && children}
      </div>
      <div className="modal-footer">
        <button type="button" className="btn btn-secondary mAuto" data-dismiss="modal" onClick={closeModal} >CERRAR</button>
        {/* <button type="button" className="btn btn-primary">PUBLICAR</button> */}
      </div>
    </div>
  </div>
</div>
  )
}

export default ModalComponent;
