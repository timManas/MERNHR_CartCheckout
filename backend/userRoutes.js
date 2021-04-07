import express from 'express'
import User from './userModel.js'
import asyncHandler from 'express-async-handler'
import generateToken from './generateToken.js'

const router = express.Router()

router.route('/login').post(
  asyncHandler(async (req, res) => {
    const { email, password } = req.body
    const user = await User.findOne({ email })
    if (user && (await user.matchPassword(password))) {
      res.json({
        _id: user._id,
        name: user.name,
        email: user.password,
        isAdmin: user.isAdmin,
        token: generateToken(user._id),
      })
    } else {
      res.status(401)
      res.json({ error: 'Invalid Email or Password' })
    }
  })
)

export default router
