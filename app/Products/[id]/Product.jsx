import React from 'react';

// async function GetProduct(id) {
//   const res = await fetch(`https://group-c.onrender.com/products/${id}`);
//   console.log(res)
//   if (!res.ok) {
//     throw new Error('Failed to fetch product');
//   }
//   return res.json();
// }

// export async function getServerSideProps(context) {
//   const { id } = context.params;

//   try {
//     const product = await GetProduct(id);
//     return {
//       props: {
//         product,
//       },
//     };
//   } catch (error) {
//     return {
//       notFound: true,
//     };
//   }
// }

function Product({ product }) {
  if (!product) {
    
    return <div>Product not found</div>;
  }
  console.log('Product:', product); 
  return (
    <div>
      <h1>{product.name}</h1>
      <p>{product.description}</p>
      <img src={product.image} alt={product.name} width={200} height={200} />
    </div>
  );
}

export default Product;
