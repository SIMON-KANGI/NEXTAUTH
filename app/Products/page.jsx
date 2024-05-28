import React from 'react'
import GetProducts from './getProducts'
import Link from 'next/link'
import {options} from '../api/auth/[...nextauth]/options'
import { getServerSession } from 'next-auth'
import { redirect } from 'next/navigation'
async function Products() {
  const session=await getServerSession(options)

  if(!session){
    redirect("/api/auth/signin?callbackUrl=/Products")
  }
  return (
    <div>
      <h1 className='text-center font-bold text-blue-700 text-2xl'>{session?.user?.username}</h1>
      <Link href="/Products/AddProducts" className='bg-green-700 rounded-full text-slate-200 font-bold px-8 py-3 hover:text-black hover:bg-white'>Add products</Link>
      <GetProducts/>
    </div>
  )
}

export default Products
