import React from 'react';
import './Compare.css';

const Compare = ({products}) =>
  <div className="row compare results container-fluid">
    <div className="col-12 mt-5 text-center">
      <table className="table">
        <thead className="thead-default">
          <tr>
            <th />
            {products.map(product =>
              <th key={product.id}>
                <strong>{product.name}</strong>
              </th>
            )}
          </tr>
        </thead>
        <tbody>
          <tr className="price">
            <th scope="row">Price</th>
            {products.map(product =>
              <td key={product.id} className="text-center">{product.price}</td>
            )}
          </tr>
          <tr className="colors">
            <th scope="row">Colors</th>
            {products.map(product =>
              <td key={product.id}>
                {product.colors.map((color, index) =>
                  color +", "
                )}
              </td>
            )}
          </tr>
          <tr className="price">
            <th scope="row">ROM</th>
            {products.map(product =>
              <td key={product.id} className="text-center">{product.ROM}</td>
            )}
          </tr>
          <tr className="price">
            <th scope="row">Camera</th>
            {products.map(product =>
              <td key={product.id} className="text-center">{product.Camera}</td>
            )}
          </tr>
          <tr className="price">
            <th scope="row">Display</th>
            {products.map(product =>
              <td key={product.id} className="text-center">{product.Display}</td>
            )}
          </tr>
          <tr className="price">
            <th scope="row">Processor</th>
            {products.map(product =>
              <td key={product.id} className="text-center">{product.Processor}</td>
            )}
          </tr>
          <tr className="price">
            <th scope="row">Warranty</th>
            {products.map(product =>
              <td key={product.id} className="text-center">{product.Warranty}</td>
            )}
          </tr>
        </tbody>
      </table>
    </div>
  </div>

export default Compare;