import { BiHeart } from 'react-icons/bi'
import { BsBag } from 'react-icons/bs'
const SidePanel = () => {
  return (
    <div className='h-full'>
      <div className="bg-black p-10 flex flex-col gap-4 h-full ">
        <h1 className="text-black bg-white pl-4 spany">Order Product</h1>
        <div className='product__infos text-white font-bold flex flex-col gap-4'>
          <h1>Miss Dior</h1>
          <h1>Brand : Dior</h1>
          <h1>Price : 144.44$</h1>
          <div className='flex flex-col gap-4'>
            <label htmlFor="qunatity">Quantity</label>
            <input type="number" placeholder='product quantity' className='p-2'/>
          </div>

        </div>
        <div className='w-full '>
                        <div className='flex items-center justify-between w-[100%]  mb-4'>
                <button className='btn__secondary bg-gray-300 text-black w-[70%] rounded-none font-bold'>Save In Bag</button> 
                <span className='bg-white text-black p-3  '><BsBag /></span>          
                        </div>
                        <div className='flex items-center justify-between w-[100%]  mb-4'>
                <button className='btn__secondary bg-white text-black w-[70%] rounded-none font-bold'>Add To Cart</button> 
                <span className='bg-white text-black p-3  '><BiHeart /></span>          
                        </div>
                       
            </div>

            
      </div>
    </div>
  )
}

export default SidePanel
