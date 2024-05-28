'use client'

import React,{useState,useEffect} from 'react'
function NewProduct() {
    const [values,setValues]=useState({
        name:'',
        image:'',
        category:'',
        description:'',
        price:'',
        description:''
    })
    
    function handleChange(event) {
        setValues({
           ...values,
            [event.target.name]:event.target.value
        })
    }
    function handleSubmit(event) {
    
        event.preventDefault()
        const newProduct={
            name:values.name,
            image:values.image,
            category:values.category,
            price:values.price,
            description:values.description
        }
        fetch('https://group-c.onrender.com/products',{
            method:'POST',
            headers:{
                'Content-Type':'application/json'
            },
            body:JSON.stringify(newProduct)
        }).then(res=>res.json())
       .then(data=>console.log(data))
    }
    
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
        <span>Product Name</span>
        
        <input type="text" onChange={handleChange} name="name" value={values.name} placeholder="name" required/>
        </label>
        <label>
        <span>Product image</span>
        
        <input type="text" onChange={handleChange} name="image" value={values.image} placeholder="image" required/>
        </label>
        <label>
        <span>Product category</span>
        
        <input type="text" onChange={handleChange} name="category" value={values.category} placeholder="category" required/>
        </label>
        <label>
        <span>Product price</span>
        
        <input type="number" onChange={handleChange} name="price" value={values.price} placeholder="price" required/>
        </label>
        <label>
        <span>Product Description</span>
        
        <input type="text"  onChange={handleChange} name="description" value={values.description} placeholder="description" required/>
        </label>
        <button type="submit" className='bg-green-700 rounded-full text-slate-200 font-bold px-8 py-3 hover:text-black hover:bg-white'>Add Product</button>
      </form>
    </div>
  )
}

export default NewProduct
