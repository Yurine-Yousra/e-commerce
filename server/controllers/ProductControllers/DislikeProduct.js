import Product from "../../Models/Product.js"
const DislikedProduct = async(req,res) => {
    const {productId} = req.params
    try{
    const DislikedProduct = await Product.findByIdAndUpdate({productId} , {$inc : {likes: -1}} , {new:true})
    return res.status(200).josn({succes:true , message:"likes incremented succesfully" , data:DislikedProduct})
    }
    catch(error) {
        console.log(error)
        return res.status(500).json({succes:false , message:"an error occured"})
    }
}

export default DislikedProduct