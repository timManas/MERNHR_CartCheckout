import axios from 'axios'
import { disable } from 'colors'
import {
  CART_ADD_ITEM,
  CART_REMOVE_ITEM,
  CART_SAVE_SHIPPING_ADDRESS,
  CART_SAVE_PAYMENT_METHOD,
} from '../constants/cartConstants'

export const addToCart = (id, qty) => (dispatch) => {
    const { data } = await axios.get(`/api/products/:id`)

    dispatch({
        type: CART_ADD_ITEM,
        payload: {
            product: data._id,
            name: data.name,
            image: data.image,
            price: data.price,
            countInStock: data.countInStock,
            qty
        }
    })

    localStorage.setItem('cartItems', JSON.stringify(getState().cart.cartItems))
}

export const removeFromCart = () => (dispatch) => {}

export const saveShippingAddress = () => (dispatch) => {}

export const savePaymentMethod = () => (dispatch) => {}
