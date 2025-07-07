"use client"
import { FiPlus, FiMinus, FiTrash2 } from "react-icons/fi"
import "./Cart.css"

const Cart = ({ cartItems, onRemoveItem, onUpdateQuantity, darkMode }) => {
  // محاسبه مجموع قیمت‌ها با در نظر گرفتن تخفیف و تعداد
  const calculateItemPrice = (item) => {
    const basePrice = item.discount > 0 ? Math.round(item.price - (item.price * item.discount) / 100) : item.price
    return basePrice * item.quantity
  }

  const subtotal = cartItems.reduce((sum, item) => sum + calculateItemPrice(item), 0)
  const shipping = subtotal > 5000000 ? 0 : 150000 // ارسال رایگان برای سفارش‌های بالای 5 میلیون تومان
  const total = subtotal + shipping

  // بررسی خالی بودن سبد خرید
  if (cartItems.length === 0) {
    return (
      <div className={`cart-container empty ${darkMode ? "dark" : ""}`}>
        <h2>سبد خرید شما</h2>
        <div className="empty-cart">
          <div className="empty-cart-icon">🛒</div>
          <p>سبد خرید شما خالی است</p>
          <button className="continue-shopping">ادامه خرید</button>
        </div>
      </div>
    )
  }

  return (
    <div className={`cart-container ${darkMode ? "dark" : ""}`}>
      <h2>سبد خرید شما</h2>

      {/* لیست آیتم‌های سبد خرید */}
      <div className="cart-items-container">
        {cartItems.map((item) => (
          <div key={item.id} className="cart-item">
            {/* تصویر محصول */}
            <div className="cart-item-image">
              <img src={item.image || "https://via.placeholder.com/60"} alt={item.name} />
            </div>

            {/* اطلاعات محصول */}
            <div className="cart-item-details">
              <h3>{item.name}</h3>
              <div className="cart-item-price">
                {item.discount > 0 ? (
                  <>
                    <span className="cart-original-price">{item.price.toLocaleString()} تومان</span>
                    <span className="cart-discounted-price">
                      {Math.round(item.price - (item.price * item.discount) / 100).toLocaleString()} تومان
                    </span>
                  </>
                ) : (
                  <span>{item.price.toLocaleString()} تومان</span>
                )}
              </div>
            </div>

            {/* کنترل تعداد */}
            <div className="quantity-control">
              <button className="quantity-btn" onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}>
                <FiPlus />
              </button>
              <span className="quantity">{item.quantity}</span>
              <button className="quantity-btn" onClick={() => onUpdateQuantity(item.id, item.quantity - 1)}>
                <FiMinus />
              </button>
            </div>

            {/* قیمت کل */}
            <div className="cart-item-total">{calculateItemPrice(item).toLocaleString()} تومان</div>

            {/* دکمه حذف */}
            <button onClick={() => onRemoveItem(item.id)} className="remove-btn" title="حذف از سبد خرید">
              <FiTrash2 />
            </button>
          </div>
        ))}
      </div>

      {/* خلاصه سفارش */}
      <div className="cart-summary">
        <div className="summary-row">
          <span>جمع سبد خرید:</span>
          <span>{subtotal.toLocaleString()} تومان</span>
        </div>
        <div className="summary-row">
          <span>هزینه ارسال:</span>
          <span>{shipping === 0 ? "رایگان" : `${shipping.toLocaleString()} تومان`}</span>
        </div>
        <div className="summary-row total">
          <span>مجموع:</span>
          <span>{total.toLocaleString()} تومان</span>
        </div>
      </div>

      {/* دکمه‌های اقدام */}
      <div className="cart-actions">
        <button className="continue-shopping">ادامه خرید</button>
        <button className="checkout-btn">تکمیل خرید</button>
      </div>
    </div>
  )
}

export default Cart
