import React, { useEffect } from 'react'
import { Row, Col } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { listProducts } from '../actions/productActions'

const HomeScreen = () => {
  // What do i need ?  List of products
  const dispatch = useDispatch()
  const productsList = useSelector((state) => state.productList)
  const { products } = productsList
  console.log('Axios Produts: ' + JSON.stringify(products))

  useEffect(() => {
    dispatch(listProducts())
  }, [])

  return <h1>HomeScreen</h1>
}

export default HomeScreen
