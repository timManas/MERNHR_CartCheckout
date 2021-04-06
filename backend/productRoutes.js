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

router.route('/:id').get(
  asyncHandler(async (req, res) => {
    const product = await Product.findById({ _id: req.params.id })
    if (product) {
      res.json(product)
    } else {
      res.send(400)
      throw new Error('Product not found')
    }
  })
)

export default router
