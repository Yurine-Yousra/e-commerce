import mongoose from 'mongoose'
const userSchema = new mongoose.Schema({
    username: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    photo :{type :String , required:false , unique:false},
    bag : [
        {
            type:mongoose.Schema.Types.ObjectId,
            ref:'Product'
        }
    ],
    purchaces : [
        {
            type:mongoose.Schema.Types.ObjectId,
            ref:'Product'
        }
    ],
    liked : [
        {
            type:mongoose.Schema.Types.ObjectId,
            ref:'Product'
        }
    ]
});

const User = mongoose.model('User', userSchema);

export default User
