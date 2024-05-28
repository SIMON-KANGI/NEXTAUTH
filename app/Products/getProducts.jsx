'use client';

import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';

async function fetchProducts() {
  const res = await fetch('https://group-c.onrender.com/products');
  return res.json();
}

function isValidUrl(url) {
  try {
    new URL(url);
    return true;
  } catch (_) {
    return false;
  }
}

function GetProducts() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function getProducts() {
      const products = await fetchProducts();
      setProducts(products);
    }

    getProducts();
  }, []);

  return (
    <div className='grid grid-cols-5 p-2'>
      {products.map(product => (
        <div key={product.id}>
          <Link href={`/Products/${product.id}`} passHref>
            
              <Image
                src={isValidUrl(product.image) ? product.image : ''}
              
                alt={product.name}
                width={240}
                height={240}
                className='w-60 h-60'
                loader={({ src }) => src}
               
              />
              <h1 className='text-xl font-bold'>{product.name}</h1>
              <h1 className='text-orange-500 font-bold'>ksh {product.price}</h1>
           
          </Link>
        </div>
      ))}
    </div>
  );
}

export default GetProducts;
