"use client"

// src/components/Circle/pages/Page2.js
import Product from "./Product"
import { useState } from "react"
import Navbar from "./Navbar"
import ProductsContext from "./context/ProductsContext"


const Page2 = () => {
  const [products, setProducts] = useState([
    // Fixed typo in setter name
    { id: 1, count: 3, title: "pc", price: "100,000" , aboutProduct:"this is pc"},
    { id: 2, count: 8, title: "phone", price: "25,000" ,aboutProduct:"this is phone"},
    { id: 3, count: 8, title: "airpod", price: "5,000" ,aboutProduct:"this is airpod"},
  ])

 
  const contextValue = {
    products,
    onPlus: plusHandler,
    onMinus: minusHandler,
    onDelete: deleteHandler,
    onReset: resetHandler,
  }

  return (
    <ProductsContext.Provider value={contextValue}>
      <Navbar />
      <div className="d-flex justify-content-center flex-wrap gap-3 p-4 mt-5">
        <button
          className="btn btn-primary d-flex justify-content-center flex-wrap gap-3 p-4 mt-5"
          onClick={resetHandler}
        >
          reset
        </button>
        {products.map((p, index) => (
          <Product id={p.id} key={index} title={p.title} count={p.count} aboutProduct={p.aboutProduct} price={p.price}>
            <p>{p.price}</p>
          </Product>
        ))}
      </div>
    </ProductsContext.Provider>
  )
   function plusHandler(productId) {
    const newProduct = [...products]
    const index = newProduct.findIndex((p) => p.id === productId)
    newProduct[index].count += 1
    setProducts(newProduct)
  }

  function minusHandler(productId) {
    const newProduct = [...products]
    const index = newProduct.findIndex((p) => p.id === productId)
    newProduct[index].count -= 1
    setProducts(newProduct)
  }

  function deleteHandler(productId) {
    const newProduct = products.filter((p) => p.id !== productId)
    setProducts(newProduct)
  }

  function resetHandler() {
    const newProduct = products.map((p) => {
      return { ...p, count: 0 }
    })
    setProducts(newProduct)
  }
}

export default Page2
