import Image01 from '../assets/jessica-weiller-So4eFi-d1nc-unsplash-removebg-preview(1).png';
import { BiHeart } from "react-icons/bi";
import { BsStarFill } from 'react-icons/bs';
import { useState } from 'react';

interface Product {
    _id: string;
    title: string;
    description: string;
    brand: string;
    price: number;
    soldOut: boolean;
    size: number;
    quantity: number;
    notes: string[];
    sex: string;
    likes: number;
    avgRating: number;
    totalRating: number;
}

interface CardProps {
    product: Product;
}

const Card: React.FC<CardProps> = ({ product }) => {
  console.log(product)
    const [red, setRed] = useState(false);
    return (
        <div className="card group relative">
            <span className='absolute top-4 right-4 text-[30px]' onClick={() => setRed(!red)}>
                <BiHeart className={`${red && "text-red-500"}`} />
            </span>
            <div className='w-full h-[50%] pt-5'>
                <figure className='w-full h-full'>
                    <img src={Image01} alt={product.title} className='w-full h-full' />
                </figure>
            </div>
            <div className='flex flex-col gap-2 w-[80%] m-auto'>
                <h2 className='font-bold'>{product.title}</h2>
                <div className='flex flex-col xl:flex-row gap-5'>
                    <span className='py-1 px-5 mt-2 w-fit bg-black text-white font-bold'>{product.brand}</span>
                    <span className='py-1 px-5 mt-2 w-fit bg-white text-black font-light'>{product.sex}</span>
                </div>
                <div className='flex flex-row gap-5'>
                    <div className='flex flex-row gap-1'>
                        {[1, 2, 3, 4, 5].map((num) => (
                            <span key={num} className='text-[20px]'><BsStarFill /></span>
                        ))}
                    </div>
                    <span>{product.avgRating}<span className='text-blue-700'>({product.totalRating})</span></span>
                </div>
                <h2>{product.price}$</h2>
                <button className='btn__hover bg-inherit py-2 border border-solid border-black w-full mx-auto font-bold'>Add To Cart</button>
            </div>
        </div>
    );
};

export default Card;
