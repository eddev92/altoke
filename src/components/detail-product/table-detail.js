import React from 'react';
import '../../styles/table-detail.css';

const TableDetail = () => {
  return (
    <table class="table table-hover">
      <tbody>
        <tr>
          <th scope="row">TALLA</th>
          <td>S</td>
          <td>M</td>
          <td>L</td>
        </tr>
        <tr>
          <th scope="row">COLORES</th>
          <td>ROJO</td>
          <td>AZUL</td>
          <td>NEGRO</td>
        </tr>
        <tr>
          <th scope="row">MATERIAL</th>
          <td colSpan={6}>Larrdasds, dasdasd, dasdsa</td>
        </tr>
        <tr>
          <th scope="row">PRECIO</th>
          <td colSpan={6}>S/. 50.00</td>
        </tr>
        <tr>
          <th scope="row">TELEFONOS</th>
          <td colSpan={6}>999 999 999</td>
        </tr>
        <tr>
          <th scope="row">VISITANOS</th>
          <td colSpan={6} className="website-client">www.dasdsdas.com</td>
        </tr>
      </tbody>
    </table>
  )
}

export default TableDetail;
