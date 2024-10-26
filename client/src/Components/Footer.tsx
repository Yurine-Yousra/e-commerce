
const Footer = () => {
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
  return (
    <div className=" bg-black w-full text-white mt-12 h-[20rem] p-5 flex  justify-around ">  
    <div>
    <h1 className="text-[24px] text-white font-bold">Quik Links</h1>
    <ul className='flex flex-col items-start justify-center gap-3 mt-12'>
        {Links?.map((item,index) => (
            <li key={index} className='capitalize text-[17px]'><a href={item.href}>{item.desc}</a></li>
        ))}
    </ul>
    </div>
    <div>
        <h1 className="mb-5 font-bold text-[30px]">Logo</h1>
        <div className='flex flex-row items-center gap-4'>
    <button className='btn__secondary bg-white text-black rounded-none'>Login</button>
    <button className='btn__secondary bg-white text-black rounded-none' >Register</button>
</div>
    </div>
    
    </div>
    )
}

export default Footer
