import React from 'react'
import PropTypes from 'prop-types';
export const ProductDetail = ({ product = {}, removeProduct, selectedProduct }) => {
  return (
    <tr>
        <td>{product.name}</td>
        <td>{product.price}</td>
        <td>
            <button onClick={ () => removeProduct( product.id )}>Remove</button>
        </td>
        <td>
            <button onClick={ () => selectedProduct( product )}>Edit</button>
        </td>
    </tr>
  )
}

ProductDetail.propTypes = {
  product: PropTypes.object.isRequired,
  removeProduct: PropTypes.func.isRequired,
}
