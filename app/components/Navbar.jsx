import Link from 'next/link'
import React from 'react'
import { getServerSession } from 'next-auth'
import options from '../api/auth/[...nextauth]/options'
async function Navbar() {
  const session = await getServerSession(options)
  return (
    <nav className='bg-gray-900 text-gray-100 p-6'>
    <ul className='flex'>
       <li className='px-3'>
        <Link href="/">Home</Link>
      </li>
      <li className='px-3'>
        <Link href="/Products">Products</Link>
      </li>
      
        
      {session?<Link href="/api/auth/signout?callbackUrl=/">Logout</Link>:
      <div>
         <Link href="/api/auth/signin">Login</Link>
      <Link href="/Signup">Signup</Link>
      </div>
     
      }
    </ul>
     
    </nav>
  )
}

export default Navbar
