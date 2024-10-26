import User from "../../Models/User.js";


const AddToMyBag =  async(req,res) => {
    const {userId} = req.userId
    const {productId} = req.params
    try{
    const user = await User.findByIdAndUpdate(userId , {$addToSet: {bag :productId}}  , {new:true})
    return res.status(200).json({succes:true , message: "product added to your bag succesfully" , data:user})
    }
    catch(error){
        console.log(error)
        return res.status(500).json({succes:false , message:"an error occured"})
    }
}

export default AddToMyBag
