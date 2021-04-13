import asyncHandler from 'express-async-handler'
import User from './userModel.js'
import generateToken from './generateToken.js'

export const authUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body
  console.log(`EmailPassowrd: ${email}    ${password}`)
  const user = await User.findOne({ email })
  console.log(`UserExists: ${JSON.stringify(user)}}`)
  console.log(
    `PasswordMatch: ${JSON.stringify(await user.matchPassword(password))}}`
  )
  if (user && (await user.matchPassword(password))) {
    console.log('Authenticated')
    res.json({
      _id: user._id,
      name: user.name,
      email: user.password,
      isAdmin: user.isAdmin,
      token: generateToken(user._id),
    })
  } else {
    console.log('NOT Authenticated')
    res.status(401)
    res.json({ error: 'User not found' })
  }
})

export const getUserProfile = asyncHandler(async (req, res) => {
  const user = await User.findOne(req.user._id)
  if (user) {
    res.json({
      _id: user._id,
      name: user.name,
      email: user.password,
      isAdmin: user.isAdmin,
    })
  } else {
    res.status(401)
    throw new Error('Not Authorized, no token')
  }
})

export const registerUser = asyncHandler(async (req, res) => {
  const { name, email, password } = req.body

  const userExist = await User.findOne({ email })
  if (userExist) {
    res.status(400)
    res.send('User already Exists')
    throw new Error('User already exists')
  }

  const user = await User.create({ name, email, password })
  if (user) {
    res.status(200)
    res.json({ name, email, password })
  } else {
    res.status(400)
    throw new Error('Unable to create User')
  }
})
