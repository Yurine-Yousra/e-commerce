import User from '../../Models/User.js'
const AddToMyPurchaces = async(req,res) => {
        const {productId} = req.params
        const {userId} = req.userId
        try{
        const user = await User.findByIdAndUpdate(userId , {$addToSet: {purchaces :productId}})
        if(!user){
            return res.status(400).json({succes:false , message:"user not found you have to login or regsiter"})
        }
        return res.status(200).json({succes:true , message:"the prodcut was added succesfully to your purchaces" , data:user})
        }
        catch(error){
            console.log(error)
            return res.status(500).json({succes:false , message:"Internal Server Error"})
        }
}

export default AddToMyPurchaces