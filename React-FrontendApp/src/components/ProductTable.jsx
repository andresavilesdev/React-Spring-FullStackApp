import React from 'react'
import PropTypes from 'prop-types';
import { ProductDetail } from './ProductDetail'

export const ProductTable = ( { products = [], removeProduct, selectedProduct } ) => {
  return (
    <table>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Price</th>
                    <th>Remove</th>
                    <th>Edit</th>
                </tr>
            </thead>
            <tbody>
                {products.map(( product ) => (
                    <ProductDetail selectedProduct={ selectedProduct } 
                      removeProduct={ removeProduct } 
                      key={ product.name } 
                      product={ product } />
                ))}
            </tbody>
    </table>
  )
}

ProductTable.propTypes = {
    products: PropTypes.array.isRequired,
    removeProduct: PropTypes.func.isRequired,
    selectedProduct: PropTypes.func.isRequired
}
