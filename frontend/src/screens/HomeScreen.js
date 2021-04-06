import React, { useEffect } from 'react'
import { Row, Col } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { listProducts } from '../actions/productActions'
import Product from '../components/Product'

const HomeScreen = () => {
  // What do i need ?  List of products
  const dispatch = useDispatch()
  const productsList = useSelector((state) => state.productList)
  const { products } = productsList
  console.log('Axios Produts: ' + JSON.stringify(productsList))

  useEffect(() => {
    dispatch(listProducts())
  }, [dispatch])

  return (
    <>
      <h1>Latest Product</h1>
      <Row>
        {products.map((product) => (
          <Col key={product._id}>
            <Product product={product} />
          </Col>
        ))}
      </Row>
    </>
  )
}

export default HomeScreen
