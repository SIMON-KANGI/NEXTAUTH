import React from 'react';
import Product from './Product';

async function ProductDetails(id){
    const res = await fetch(`https://group-c.onrender.com/products/${id}`);
    console.log(res)
    if (!res.ok) {
      throw new Error('Failed to fetch product');
    }
    return res.json();
  
}
async function Details({params}) { // Destructure id from props object
    const product=await ProductDetails(params.id)
  return (
    <div>
      <Product product={product}/> {/* Pass id as a prop to Product component */}
    </div>
  );
}

export default Details;
