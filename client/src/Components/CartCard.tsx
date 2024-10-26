import Image01 from '../assets/jessica-weiller-So4eFi-d1nc-unsplash-removebg-preview(1).png'
import { BiHeart} from "react-icons/bi"
import { BsStarFill } from 'react-icons/bs'
import { useState } from 'react'

const CartCard = () => {
  const [red,SetRed] = useState(false)
  return (
      <div className="card relative">
      <span className='absolute top-4 right-4 text-[30px]' onClick={() =>SetRed(!red)}><BiHeart className={`${red === true && "text-red-500"} `} /></span>
        <div className='w-full h-[50%] pt-5'>
            <figure className='w-full h-full' >
                <img src={Image01} alt=""  className='w-full h-full '/>
            </figure>
        </div>
      <div className='flex flex-col gap-2 w-[80%] m-auto'>
        <h2 className='font-bold'>Miss Dior</h2>
        <div className='flex sm:flex-row flex-col gap-5'>
        <span className='py-1 px-5 mt-2   w-fit  bg-black text-white font-bold'>Dior</span>
        <span className='py-1 px-5 mt-2   w-fit  bg-white text-black font-light'>For Her</span>
        </div>
        
        <div className='flex flex-row gap-5'>
        <div className='flex flex-row gap-1'>
        {
          [1,2,3,4,5].map((num) => (
          <span key={num} className='text-[20px]'><BsStarFill  /></span>
          ) )
          } 
        </div>
        <span>4.9<span className='text-blue-700'>(172)</span></span>
        </div>
        <h2>144.5$</h2>   
        <button className='bg-inherit py-2  w-full mx-auto  font-bold  bg-red-600 text-white ' >Delete From Cart</button>
      </div>
    </div>
  )
}

export default CartCard

