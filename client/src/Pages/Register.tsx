import { useState } from "react"
import { Link } from "react-router-dom";
const Register = () => {
    const [user , setUser] = useState({
        email:'',
        password:'',
        username:''
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
                <label className="form__label">Username</label>
                <input id="username" type="text" onChange={handleChange} value={user.username} className="form__input" placeholder="enter your email"></input>
            </div>
            <div className="flex flex-col gap-4" >
                <label className="form__label">Email</label>
                <input id="email" type="email" onChange={handleChange} value={user.email} className="form__input" placeholder="enter your email"></input>
            </div>
            <div className="flex flex-col gap-4">
                <label className="form__label">password</label>
                <input id="password" type="text" onChange={handleChange} value={user.password} className="form__input" placeholder="enter your password"></input>
            </div>
            <button className="btn__secondary rounded-none  px-4 py-3">Register</button>
            <span className="text-gray-600 text-center">You have an account ? <span className="font-bold text-black"><Link to='/login'>Login</Link></span></span>
        </form>
      
    </div>
  )
}

export default Register
