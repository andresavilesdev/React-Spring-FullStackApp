import React, { useEffect, useState } from 'react'

export const ProductForm = ( { addProduct, selectedProduct } ) => {

    const initialForm = {
        id: 0,
        name: "",
        price: ""
    };

    // HOOK
    const [form, setForm] = useState(initialForm);
    useEffect(() => {
      setForm( selectedProduct );
    }, [ selectedProduct ])
    

    // Destructuring form values
    const { id, name, price } = form;

    // Event handler for catch up form events
    const handleChange = ( event ) => {
        const { name, value } = event.target;
        setForm((prevForm) => ({...prevForm, [name]: value}));
    }

    // Event handler for submit form
    const onSubmit = ( id ) => {
        if ( !name || !price ) {
            alert("Please complete the form");
            return;
        }        

        // Add new product to the products array
        addProduct(form);

        if(id > 0){
            alert(`Product ${name} edited successfully`);
        }else{
            alert(`Product ${name} added successfully`);
        }
        
        // Reset form
        setForm(initialForm);
        
    };

  return (
    <form onSubmit={ ( event ) => {
        event.preventDefault();
        onSubmit( form.id );
    }}>
        <div>
            <input type="text" 
                name='name'
                placeholder="Product Name"
                className='form-control my-3 w-75'
                value={ name }
                onChange={ handleChange }
            />
        </div>
        <div>
            <input type="number" 
                name='price'
                placeholder="Price" 
                className='form-control my-3 w-75'
                value={ price }
                onChange={ handleChange }
            />
        </div>
        <div>
            <button type="submit" className='btn btn-primary'>
                { id > 0 ? "Update" : "Add" }
            </button>
        </div>
  
    </form>
  )
}
