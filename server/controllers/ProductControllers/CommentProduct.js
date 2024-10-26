import Comment from '../../Models/Comment.js'

const CommentProduct = async(req,res) => {
    const {productId} = req.params
    const {userId} = req.userId
    try{
        {!req.body.product ? req.body.product === productId : ""}
        {!req.body.user ? req.body.user === userId : ""}
        const comment = new Comment({
            user : req.body.user,
            product : req.user.product,
            content:req.body.content
        })
        await comment.save()
        return res.status(200).send({succes:true , message:'comment added succesfully' , data:comment})
    }
    catch(error){
        console.log(error)
        return res.status(500).josn({succes:false , message:"an error occured"})
    }
}

export default CommentProduct