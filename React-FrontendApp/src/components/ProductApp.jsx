import React, { useEffect, useState } from 'react'
import { findAll, }  from "../services/ProductService";
import { ProductTable } from './ProductTable';
import { ProductForm } from './ProductForm';

export const ProductApp = () => {

    const [products, setProducts] = useState([]);

    const [productSelected, setProductSelected] = useState({
        id: 0,
        name: "",
        price: ""
    })

    const getProducts = async () => {
        const result = await findAll();
        setProducts(result.data._embedded.products);
    };

    useEffect(() => {
        getProducts();
    }, []);

    const handlerAddProduct = ( product ) => {
        console.log( product );

        if ( product.id > 0 ) {
            setProducts( products.map( prod => {
                if ( prod.id == product.id ) {
                    return { ...product };
                }
                return prod;
            }));
        } else{
            setProducts([...products, { ...product, id: new Date().getTime() }]);
        }


            
    }

    const handlerRemoveProduct = ( id ) => {
        setProducts(products.filter((product) => product.id != id));
    }

    const handlerSelectedProduct = ( product ) => {
        setProductSelected({ ...product });
    }


  return (
    <div className='container my-4' >
        <h2>Products</h2>
        <div className='row' >
            <div className='col' >
                <ProductForm selectedProduct={ productSelected } addProduct={handlerAddProduct} />
            </div>
            <div className='col' >
                {
                    products.length === 0 ? <h3 className=' alert alert-warning'>No products available</h3> : <ProductTable products={products} removeProduct={ handlerRemoveProduct } selectedProduct={ handlerSelectedProduct } />
                }
            </div>
        </div>
        
    </div>
  )
}
