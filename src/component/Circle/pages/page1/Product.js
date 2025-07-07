"use client"
import { useState } from "react"
import { FiShoppingCart, FiHeart, FiEye } from "react-icons/fi"

const Product = ({ product, onAddToCart, darkMode }) => {
  const [isHovered, setIsHovered] = useState(false)
  const [isFavorite, setIsFavorite] = useState(false)

  // محاسبه قیمت با تخفیف
  const discountedPrice =
    product.discount > 0 ? Math.round(product.price - (product.price * product.discount) / 100) : null

  // تولید ستاره‌های امتیاز
  const renderStars = (rating) => {
    const stars = []
    const fullStars = Math.floor(rating)
    const hasHalfStar = rating % 1 >= 0.5

    for (let i = 0; i < fullStars; i++) {
      stars.push(
        <span key={`star-${i}`} className="star full">
          ★
        </span>,
      )
    }

    if (hasHalfStar) {
      stars.push(
        <span key="half-star" className="star half">
          ★
        </span>,
      )
    }

    const emptyStars = 5 - stars.length
    for (let i = 0; i < emptyStars; i++) {
      stars.push(
        <span key={`empty-${i}`} className="star empty">
          ☆
        </span>,
      )
    }

    return stars
  }

  // نمایش جزئیات محصول
  const handleQuickView = (e) => {
    e.stopPropagation()
    // در اینجا می‌توانید مدال یا پاپ‌آپ جزئیات محصول را نمایش دهید
    alert(`جزئیات محصول: ${product.name}\n\n${product.description}`)
  }

  // افزودن به علاقه‌مندی‌ها
  const handleToggleFavorite = (e) => {
    e.stopPropagation()
    setIsFavorite(!isFavorite)
  }

  return (
    <div
      className={`product-card ${darkMode ? "dark" : ""}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* برچسب تخفیف */}
      {product.discount > 0 && <div className="discount-badge">{product.discount}% تخفیف</div>}

      {/* تصویر محصول */}
      <div className="product-image-container">
        <img src={product.image || "https://via.placeholder.com/200"} alt={product.name} className="product-image" />

        {/* دکمه‌های اکشن روی تصویر */}
        <div className={`product-actions ${isHovered ? "visible" : ""}`}>
          <button
            className={`action-btn wishlist ${isFavorite ? "active" : ""}`}
            onClick={handleToggleFavorite}
            title="افزودن به علاقه‌مندی‌ها"
          >
            <FiHeart />
          </button>
          <button className="action-btn quickview" onClick={handleQuickView} title="مشاهده سریع">
            <FiEye />
          </button>
        </div>
      </div>

      {/* اطلاعات محصول */}
      <div className="product-info">
        <h3 className="product-name">{product.name}</h3>

        {/* قیمت محصول */}
        <div className="product-price">
          {discountedPrice ? (
            <>
              <span className="original-price">{product.price.toLocaleString()} تومان</span>
              <span className="discounted-price">{discountedPrice.toLocaleString()} تومان</span>
            </>
          ) : (
            <span className="price">{product.price.toLocaleString()} تومان</span>
          )}
        </div>

        {/* امتیاز محصول */}
        <div className="product-rating">
          {renderStars(product.rating)}
          <span className="rating-value">({product.rating})</span>
        </div>

        {/* دکمه افزودن به سبد خرید */}
        <button onClick={() => onAddToCart(product)} className={`add-to-cart ${darkMode ? "dark" : ""}`}>
          <FiShoppingCart />
          افزودن به سبد
        </button>
      </div>
    </div>
  )
}

export default Product
