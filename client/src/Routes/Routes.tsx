import Product from '../Pages/Product'
import Login from '../Pages/Login'
import Register from '../Pages/Register'
import User from '../Pages/User'
import MyBag from '../Pages/MyBag'
import MyCart from '../Pages/MyCart'
import {Route ,Routes} from 'react-router-dom'
import LikedProducts from '../Pages/LikedProducts'
import Home from '../Pages/Home'
import Categories from '../Pages/Categories'
import Search from '../Pages/Search'
import AllProducts from '../Pages/Products.jsx'


const Router = () => {
    return(
        <Routes>
            <Route  element={<Home/>} path='/home'/>
            <Route  element={<Home/>} path='/'/>
            <Route element={<Product />} path='/product' />
            <Route element={<Login /> } path='/login' />
            <Route element={<Register /> } path='/register' />
            <Route element={<User /> } path='/user' />
            <Route element={<MyBag /> } path='/mybag' />
            <Route element={<MyCart /> } path='/mycart' />
            <Route element={<LikedProducts /> } path='/likedProducts' />
            <Route element={<Categories />} path='/categories' />
            <Route element={<Search />} path='/search'/>
            <Route element={<AllProducts />} path='/allproducts'/>







        </Routes>
    )

}

export default Router