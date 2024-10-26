import mongoose from 'mongoose'


const productSchema = new mongoose.Schema({
    title : {
        type :String,
        required:true,
        unique :false
    },
    description : {
        type :String,
        required:false,
        unique :false
    },
    brand:{
        type :String,
        required:true,
        unique :false
    },
   soldOut : {
        type:Boolean,
        default:false,
        required:true,
   },
    price : {
        type :Number,
        required:true,
        unique :false
    },
   size :{
    type:Number,
    default:50,
    required:true,
   },
   quantity :{
    type:Number,
    qunatity:1,
    required:true
   },
    notes:[
        {type:String,
            default:"",
            required:true
        }
    ],
    sex: {
        type:String,
        enum : ["woman" , "man"],
        required:true,
    },
    likes :{
        type:Number,
        default :0,
    },
    avgRating : {
        type:Number,
        default:0,
    },
    totalRating : {
        type:Number,
        default:0,
    }
})

const Product = mongoose.model("Product" , productSchema)

export default Product