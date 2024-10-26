import express from 'express'
const router = express.Router()
import CreateProduct from '../controllers/ProductControllers/CreateProduct.js'
import UpdateProduct from '../controllers/ProductControllers/UpdateProduct.js'
import DeleteProduct from '../controllers/ProductControllers/DeleteProduct.js'
import AuthToken from '../Middlewares/AuthToken.js'
import LikeProduct from '../controllers/ProductControllers/LikeProduct.js'
import DisLikeProduct from '../controllers/ProductControllers/DislikeProduct.js'
import CommentProduct from '../controllers/ProductControllers/CommentProduct.js'
import GetCommentProduct from '../controllers/ProductControllers/GetProductComment.js'
import AddToMyPurchaces from '../controllers/ProductControllers/AddToMyPurchaces.js'
import GetProduct from '../controllers/ProductControllers/GetProduct.js'
import GetAllProducts from '../controllers/ProductControllers/GetAllProducts.js'

router.post('/createProduct' , CreateProduct)
router.put('/updateProduct/:productId' , AuthToken ,UpdateProduct)
router.delete('/delete/:productId' , AuthToken , DeleteProduct)
router.put('/like/productId' , AuthToken , LikeProduct)
router.put('/dislike/:productId' , AuthToken , DisLikeProduct)
router.post('/comment/:productId' , AuthToken , CommentProduct)
router.get('/comments/:productId' , AuthToken , GetCommentProduct)
router.get('prodcuts/:productId' , AuthToken , GetProduct)
router.post('/addToMyPurchases' , AuthToken , AddToMyPurchaces)
router.get('/allproducts' , GetAllProducts)
export default router