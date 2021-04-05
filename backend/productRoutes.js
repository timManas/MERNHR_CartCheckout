import express from 'express'
import Product from './productModel.js'
import asyncHandler from 'express-async-handler'

const router = express.Router()
router.route('/').get(
  asyncHandler(async (req, res) => {
    const products = await Product.find({})
    res.send(products)
  })
)

export default router
