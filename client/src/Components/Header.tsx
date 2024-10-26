import { FaHeart ,FaUser,FaShoppingBag, FaShoppingCart , FaThList , FaSearch} from 'react-icons/fa';
import { useState } from 'react';
import { Link } from 'react-router-dom';
const Header = () => {
    const [user , setUser] = useState(true)
    const Links = [
        {
            desc:"welcome",
            href:"#welcome"
        },
        {
            desc:"most seled",
            href:"#mostliked"
        },   {
            desc:"trendy",
            href:"#trendy"
        },   {
            desc:"contact",
            href:"#contact"
        },
    ]
    const buttons = [
        {
            shape:<FaHeart />,
            path:'/likedProducts'
        },
        {
            shape:<FaUser />,
            path:'/user'
        },
        {
            shape:<FaShoppingBag />,
            path:'/mybag'
        },
        {
            shape:<FaShoppingCart />,
            path:'/mycart'
        },
        {
            shape:<FaThList />,
            path:'/categories'
        }
    ]
   return (
    <header className='h-[80px] mb-6 border-b border-solid border-black' >
<div className="container flex flex-row items-center justify-between ">
    <div className='flex gap-2 items-center'>
    <ul className='flex flex-row items-center justify-center gap-3'>
        {Links?.map((item,index) => (
            <li key={index} className='capitalize text-[17px]'><a href={item.href}>{item.desc}</a></li>
        ))}
    </ul>
    <Link to='/search'><FaSearch /></Link>
    </div>
    <div>
        <h1 className='font-bold text-[24px]'><Link to='/home'>LOGO</Link></h1>
    </div>
    {user? ( 
    <div className='flex flex-row items-center justify-center gap-5 text-[20px]'>
   {
    buttons.map((button) => (
        <Link to={button.path}>{button.shape}</Link>
    ))
   }
    <button className='border border-solid border-black text-black px-2 hover:bg-black hover:text-white transition transform delay-100n rounded-[50px] text-[15px] py-1' >LogOut</button>
    </div>
    ) :  <div className='flex flex-row items-center gap-4'>
    <button className='btn__secondary'>Login</button>
    <button>Register</button>
</div>}
    </div>
        </header>
    )
}

export default Header
