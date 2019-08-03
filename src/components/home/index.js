import React from 'react';
import '../../styles/home.css';
import MotorcyclesComponent from '../shared/spinner';

const HomeComponent = ({ handleOption = () => {}, active = false, handleJob = () => {}, modalProps = {}, showListGaleries = false, jobWished = '' }) => {
  return(
    <div className="hero-wrap js-fullheight" style={{backgroundImage: 'url(images/bg_3.jpg)'}} data-stellar-background-ratio="0.5">
        {
          !showListGaleries &&
          <div>
            <div className="row need-job">
                <div className="col-md-5 search-job text-center">
                  {
                    !active && <h3 className="text-black" onClick={handleOption}>BUSCAR GALERIA</h3>}
                    <input className={active ? 'input-search-job col-md-7 active' : 'input-search-job'} onChange={handleJob} value={jobWished} placeholder="Ejemplo: Textiles ABC"/>
                    {active && <button onClick={handleOption} className="btn btn-dark waves-effect waves-light search-job-wished">BUSCAR</button>
                  }
                </div>
                <div className="col-md-5 have-job text-center" data-toggle="modal" data-target={modalProps.dataTarget} onClick={handleOption.bind(this, 2)}>          
                  <h3 className="text-black">ANUNCIATE</h3>
                </div>
              </div>
            </div>
        }
      {/* <MotorcyclesComponent /> */}
    </div>
  )
}

export default HomeComponent;
