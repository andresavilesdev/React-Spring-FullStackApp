import React, { useEffect, useState } from 'react'

export const ProductForm = ( { addProduct, selectedProduct } ) => {

    const initialForm = {
        name: "",
        price: ""
    };

    // HOOK
    const [form, setForm] = useState(initialForm);
    useEffect(() => {
      setForm( selectedProduct );
    }, [ selectedProduct ])
    

    // Destructuring form values
    const {  name, price } = form;

    // Event handler for catch up form events
    const handleChange = ( event ) => {
        const { name, value } = event.target;
        setForm((prevForm) => ({...prevForm, [name]: value}));
    }

    // Event handler for submit form
    const onSubmit = () => {
        if ( !name || !price ) {
            alert("Please complete the form");
            return;
        }        

        // Add new product to the products array
        addProduct(form);
        alert(`Product ${name} added`);
        
        // Reset form
        setForm(initialForm);
        
    };

  return (
    <form onSubmit={ (event) => {
        event.preventDefault();
        onSubmit( event );
    }}>
        <div>
            <input type="text" 
                name='name'
                placeholder="Product Name"
                style={{ marginBottom: "4px"}} 
                value={ name }
                onChange={ handleChange }
            />
        </div>
        <div>
            <input type="number" 
                name='price'
                placeholder="Price" 
                style={{ marginBottom: "4px"}}
                value={ price }
                onChange={ handleChange }
            />
        </div>
        <div>
            <button type="submit">Add Product</button>
        </div>
        <div>
            <button type="submit">Update Product</button>
        </div>
  
    </form>
  )
}
