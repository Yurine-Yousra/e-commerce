import Card from "../Components/Card";
import UseFetchData from "../Context/FetchData/FetchData";



const AllProducts = () => {
    const { data, error, loading } = UseFetchData("http://localhost:8200/product/allproducts");
    if (loading) {
        return <h1>Data is Loading</h1>;
    }

    if (error) {
        return <h1>Error Occurred: {error}</h1>;
    }

    return (
        <div className="container">
            <h1 className="spany btn__secondary rounded-none">Liked</h1>
            <div className="grid lg:grid-cols-3 lg:gap-x-16 sm:grid-cols-2 grid-cols-1 gap-3">
                {data?.map((product) => (
                    <div key={product._id}>
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
                        </div>
                ))}
            </div>
        </div>
    );
};

export default AllProducts;
