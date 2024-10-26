import CartCard from "../Components/CartCard";
import SidePanel from "../Components/SidePanel";
const MyCart = () => {
    return (
      <div className="grid lg:grid-cols-4 md:grid-cols-2 w-[90%] m-auto gap-4 mt-10  ">
        <div className=" md:col-span-3 sm:col-span-2 col-span-1">
          <div className="grid lg:grid-cols-3 lg:gap-x-16  sm:grid-cols-2  gap-3">
          {[1,2,3,4,5].map((number) => (
          <CartCard  key={number}/>
          ))}
          </div>
        </div>
        <div className="  lg:col-span-1">
          <SidePanel />
        </div>
      </div>
    )
  }

  export default MyCart