import User from '../../Models/User.js'

const UpdateUserProfile = async(req,res) => {
    const {userId} = req.userId
    try{
        const user = await User.findByIdAndUpdate(userId , req.body , {new:true})
        return res.status(200).json({succes:true , message:"user Updated Succesfully" , data :user})
    }
    catch(error){
        console.log(error)
        return res.status(500).json({succes:false , message:'an error occured'})
    }
  
}

export default UpdateUserProfile
