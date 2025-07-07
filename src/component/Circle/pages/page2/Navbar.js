"use client"

import { useContext } from "react"
import ProductsContext from "./context/ProductsContext"

const Navbar = () => {
  const { products } = useContext(ProductsContext)

  return (
    <nav className="navbar navbar-light bg-light fixed-top">
      <div className="container-fluid">
        <a href="#" className="navbar-brand">
          Navbar {calculateSum()}
        </a>
      </div>
    </nav>
  )

  function calculateSum() {
    let sum = 0
    products.forEach((p) => {
      sum += p.count
    })
    return sum
  }
}

export default Navbar
