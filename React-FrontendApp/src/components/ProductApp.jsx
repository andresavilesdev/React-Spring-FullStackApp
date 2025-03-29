import React, { useEffect, useState } from 'react'
import { create, findAll, remove, update, }  from "../services/ProductService";
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

    const handlerAddProduct = async ( product ) => {

        if ( product.id > 0 ) {
            const response = await update(product)
            setProducts( products.map( prod => {
                if ( prod.id == response.data.id ) {
                    return { ...response.data };
                }
                return prod;
            }));
        } else{
            const response = await create(product)
            setProducts([...products, { ...response.data }]);
        }


            
    }

    const handlerRemoveProduct = async( id ) => {
        await remove(id);
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
