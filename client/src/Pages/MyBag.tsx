import Card from "../Components/Card"
const MyBag = () => {
  return (
    <div className="container">
        <h1 className="btn__secondary rounded-none spany">My Bag</h1>
        <div className="grid lg:grid-cols-3 lg:gap-x-16  sm:grid-cols-2  grid-cols-1 gap-3">
        {[1,2,3,4,5].map((number) => (
        <Card  key={number}/>
        ))}
        </div>
    </div>
  )
}

export default MyBag
