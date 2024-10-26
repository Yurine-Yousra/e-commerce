import Card from "../Components/Card";
import UseFetchData from "../Context/FetchData/FetchData";

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

const LikedProducts = () => {
    const { data, error, loading } = UseFetchData<Product[]>("http://localhost:5000/product/allproducts");
    console.log(data)
    console.log(data?.length)

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
                    <Card key={product._id} product={product} />
                ))}
            </div>
        </div>
    );
};

export default LikedProducts;
