import {useState} from 'react'

const Contact = () => {
    const [user , setUser] = useState({
        email:'',
        phone:'',
    })
    const handleChange = (e) => {
        const { id, value } = e.target;
        setUser((prev) => ({
            ...prev,
            [id]: value
        }));
    };
  return (
    <div className='container' id='contact'>
        <form  className="flex flex-col gap-6">
        <div className="flex flex-col gap-4" >
                <label className="form__label text-white">Email</label>
                <input id="email" type="email" onChange={handleChange} value={user.email} className="form__input border border-white border-solid" placeholder="enter your email"></input>
            </div>
            <div className="flex flex-col gap-4" >
                <label className="form__label text-white">Phone</label>
                <input id="phone" type="text" onChange={handleChange} value={user.phone} className="form__input border-white border-solid" placeholder="enter your phone"></input>
            </div>
           
            <button className="btn__secondary rounded-none bg-white text-black px-4 py-3 ">Confirm</button>
        </form>
    </div>
  )
}

export default Contact
