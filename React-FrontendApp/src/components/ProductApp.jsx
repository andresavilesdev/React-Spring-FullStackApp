import React, { useEffect, useState } from 'react'
import { listProducts }  from "../services/ProductService";
import { ProductTable } from './ProductTable';
import { ProductForm } from './ProductForm';

export const ProductApp = () => {

    const [products, setProducts] = useState([]);

    const [productSelected, setProductSelected] = useState({
        name: "",
        price: ""
    })

    useEffect(() => {
    const fetchProducts = async () => {
        const result = await listProducts();
        setProducts(result);
    };
    fetchProducts();
}, []);

    const handlerAddProduct = ( product ) => {
        console.log( product );
        setProducts([...products, { ...product }]);
    }

    const handlerRemoveProduct = ( id ) => {
        setProducts(products.filter((product) => product.id != id));
    }

    const handlerSelectedProduct = ( product ) => {
        setProductSelected({ ...product });
    }


  return (
    <div>
        <h1>Products</h1>
        <div>
            <div>
                <ProductForm selectedProduct={ productSelected } addProduct={handlerAddProduct} />
            </div>
            <div>
                <ProductTable products={products} removeProduct={ handlerRemoveProduct } selectedProduct={ handlerSelectedProduct } />
            </div>
        </div>
        
    </div>
  )
}
