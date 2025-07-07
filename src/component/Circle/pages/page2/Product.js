"use client"

import { useContext } from "react"
import ProductsContext from "./context/ProductsContext"


const Product = ({ title, count, children, id, aboutProduct ,price}) => {
  const zero = "zero"
  const { onDelete, onPlus, onMinus } = useContext(ProductsContext)

  const spanHandler = () => (count === 0 ? zero : count)

  return (
    <div style={{ border: "1px solid #ccc", padding: "10px", margin: "5px" }}>
      <span className="m-2 text-info">{title}</span>
      <span className="m-2 badge bg-primary">{spanHandler()}</span>
      <button className="m-2 btn btn-success" onClick={() => onPlus(id)}>
        +
      </button>
      <button className="m-2 btn btn-warning" onClick={() => onMinus(id)}>
        -
      </button>
      <button className="m-2 btn btn-danger" onClick={() => onDelete(id)}>
        delete
      </button>
      {children}
      <p className="mt-2">{aboutProduct}</p>
    </div>
  )
}

export default Product
