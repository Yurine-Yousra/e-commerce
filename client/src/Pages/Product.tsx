
import Imge01 from '../assets/jessica-weiller-So4eFi-d1nc-unsplash-removebg-preview(1).png'
import { BsStarFill } from 'react-icons/bs'
import Comment from '../Components/Comment'
import AddComment from '../Components/AddComment'
import SidePanel from '../Components/SidePanel'
import { useState } from 'react'

const Product = () => {
  const [open , SetOpen] = useState(false)

  return (
    <div className="container h-fit p-4  flex flex-col gap-[16rem] ">
      <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 w-full gap-4 h-[40rem] '>
     
      <div className="flex flex-col md:col-span-1 lg:col-span-2  bg-gray-200 h-full pb-[2rem]  ">
            <div >
                <figure className='w-full'>
                    <img src={Imge01} alt=""  className='w-full'/>
                </figure>
            </div>
            <div className=" flex flex-col gap-5 p-10">
            <h1 className='text-[40px] font-bold'>Miss Dior from         <span className='py-1 px-5 mt-2   w-fit  bg-black text-white font-bold hover:bg-white hover:text-black hover:border hover:border-solid hover:border-black hover:cursor-pointer transition-all transform delay-200 ml-2'>Dior</span>
            </h1>
            <div className='flex gap-3 items-center'>
            {
          [1,2,3,4,5].map((num) => (
          <span key={num} className='text-[20px]'><BsStarFill  /></span>
          ) )
          }         <span className='text-[20px]'>4.9<span className='text-blue-700'>(172)</span></span>
            </div>
            <div >
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab quod in sunt iste consequatur minus quas eos nam beatae voluptas voluptatem, quasi adipisci consectetur cumque blanditiis dolore perferendis. Exercitationem, reiciendis!</p>
                <div className='flex flex-col items-start mt-4 '>
                  <span className='bg-white p-4'>Top Notes</span>
                  <span className='py-1 px-5 mt-2   w-fit  bg-black text-white font-bold  rounded-sm hover:bg-transparent hover:text-black hover:border hover:border-solid hover:border-black transition-all transform delay-100 left-0 '>150ml /Floral</span>
                  <span className='font-bold mt-2 text-[20px]'>144.44$</span>
                </div>
            </div>
            
            </div>
        </div>
        <div className='md:col-span-1 h-full'>
        <SidePanel />
      </div>
        </div>


        
        <div className='w-[100%]  mt-16 flex flex-col gap-2'>
          <h1 className='font-bold text-[25px] mb-6 spany bg-black text-white w-fit p-4'>Customer's Reviews</h1>
          {[1,2,3,4,5].map((number ) => (
                    <Comment key={number} />
          ))}
          {open && <button className='btn__secondary w-[30%] m-auto mt-4 rounded-none' onClick={() => SetOpen(!open)}>Hide</button>
        }
           {!open && <button className='btn__secondary w-[30%] m-auto mt-4 rounded-none' onClick={() => SetOpen(!open)}>Add Review</button> }
        </div>

        <div className='w-[100%]'>
         {open && <AddComment />}
        </div>
    </div>
  )
}

export default Product
