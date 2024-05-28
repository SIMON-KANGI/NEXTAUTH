
import Link from "next/link"
export default function Home() {

  return (
    <main className="w-full">
    <div id="display" className='flex w-full justify-between mt-12'>
    <div id="display-1" className='m-20 bg-black p-5'>
        <h1 className='text-7xl text-slate-200 font-bold'>Get your Groceries Fast and<br/> <span className='text-green-500'>Fresh</span></h1>
        <h1 className='text-3xl text-slate-200 font-bold mt-10 mb-10'>Try the <span>freshpicks</span> app and get your groceries delivered anywhere<br/> <span className='text-green-500'>Fresh</span></h1>
        <Link href="/Products" className='bg-green-700 rounded-full text-slate-200 font-bold px-8 py-3 hover:text-black hover:bg-white'>SHOP NOW</Link>
    </div>
    <div>
        
    </div>
      </div>
    </main>
  )
}
