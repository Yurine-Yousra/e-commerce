import { useState } from "react"
import { Link } from "react-router-dom";
const Login = () => {
    const [user , setUser] = useState({
        email:'',
        password:''
    })
    const handleChange = (e) => {
        const { id, value } = e.target;
        setUser((prev) => ({
            ...prev,
            [id]: value
        }));
    };
    
  return (
    <div className="lg:w-[30%] m-auto md:w-[60%] sm:[80%] w-[90%] mt-10">
        <form  className="flex flex-col gap-6">
            <div className="flex flex-col gap-4" >
                <label className="form__label">Email</label>
                <input id="email" type="email" onChange={handleChange} value={user.email} className="form__input" placeholder="enter your email"></input>
            </div>
            <div className="flex flex-col gap-4">
                <label className="form__label">password</label>
                <input id="password" type="password" onChange={handleChange} value={user.password} className="form__input" placeholder="enter your password"></input>
            </div>
            <button className="btn__secondary rounded-none px-4 py-3 ">Login</button>
            <span className="text-gray-600 text-center">You are new User ? <span className="font-bold text-black"><Link to='/register'>Register</Link></span></span>
            <span className="text-gray-600 text-center">Forgot password ? <span className="font-bold text-black"><Link to='/register'>Reset Password</Link></span></span>
        </form>
      
    </div>
  )
}

export default Login
