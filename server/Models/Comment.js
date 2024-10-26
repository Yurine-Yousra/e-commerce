import mongoose from 'mongoose'

const commentSchema = new mongoose.Schema({
    content: { type: String, required: true, unique: true },
    product: { type: mongoose.Types.ObjectId, Ref: 'Product' },
    person: { type: mongoose.Types.ObjectId, Ref: 'User' },
});

const Comment = mongoose.model('Comment', commentSchema);

export default Comment
