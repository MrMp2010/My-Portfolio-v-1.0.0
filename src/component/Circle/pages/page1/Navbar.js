"use client"
import { useState, useRef, useEffect } from "react"
import { FiShoppingCart, FiSearch, FiUser, FiMenu, FiX, FiSun, FiMoon } from "react-icons/fi"
import "./Navbar.css"

const Navbar = ({ cartItems, onSearch, searchQuery, darkMode, onToggleDarkMode, onShowCart }) => {
  const [showMobileMenu, setShowMobileMenu] = useState(false)
  const [showMiniCart, setShowMiniCart] = useState(false)
  const [showCategoryDropdown, setShowCategoryDropdown] = useState(false)

  const miniCartRef = useRef(null)
  const cartBtnRef = useRef(null)

  // محاسبه تعداد کل آیتم‌های سبد خرید
  const cartItemsCount = cartItems.reduce((total, item) => total + item.quantity, 0)

  // محاسبه مجموع قیمت‌ها با در نظر گرفتن تخفیف
  const calculateItemPrice = (item) => {
    const basePrice = item.discount > 0 ? Math.round(item.price - (item.price * item.discount) / 100) : item.price
    return basePrice * item.quantity
  }

  const cartTotal = cartItems.reduce((sum, item) => sum + calculateItemPrice(item), 0)

  // بستن مینی‌کارت هنگام کلیک خارج از آن
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        miniCartRef.current &&
        !miniCartRef.current.contains(event.target) &&
        cartBtnRef.current &&
        !cartBtnRef.current.contains(event.target)
      ) {
        setShowMiniCart(false)
      }
    }

    document.addEventListener("mousedown", handleClickOutside)
    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [])

  return (
    <nav className={`navbar ${darkMode ? "dark" : ""}`}>
      <div className="navbar-container">
        {/* لوگو */}
        <a href="#" className="navbar-logo">
          TechShop
        </a>

        {/* دکمه منوی موبایل */}
        <button className="mobile-menu-btn" onClick={() => setShowMobileMenu(!showMobileMenu)}>
          {showMobileMenu ? <FiX /> : <FiMenu />}
        </button>

        {/* منوی اصلی */}
        <ul className={`nav-menu ${showMobileMenu ? "active" : ""}`}>
          <li className="nav-item">
            <a href="#" className="nav-links">
              خانه
            </a>
          </li>
          <li className="nav-item dropdown">
            <a
              href="#"
              className="nav-links"
              onClick={(e) => {
                e.preventDefault()
                setShowCategoryDropdown(!showCategoryDropdown)
              }}
            >
              محصولات
            </a>
            {showCategoryDropdown && (
              <ul className="dropdown-menu">
                <li>
                  <a href="#">لپتاپ</a>
                </li>
                <li>
                  <a href="#">موبایل</a>
                </li>
                <li>
                  <a href="#">تبلت</a>
                </li>
                <li>
                  <a href="#">لوازم جانبی</a>
                </li>
              </ul>
            )}
          </li>
          <li className="nav-item">
            <a href="#" className="nav-links">
              تخفیف‌ها
            </a>
          </li>
          <li className="nav-item">
            <a href="#" className="nav-links">
              درباره ما
            </a>
          </li>
          <li className="nav-item">
            <a href="#" className="nav-links">
              تماس با ما
            </a>
          </li>
        </ul>

        {/* فرم جستجو */}
        <div className="search-container">
          <input
            type="text"
            placeholder="جستجو..."
            value={searchQuery}
            onChange={(e) => onSearch(e.target.value)}
            className={`search-input ${darkMode ? "dark" : ""}`}
          />
          <button className="search-btn">
            <FiSearch />
          </button>
        </div>

        {/* آیکون‌های کاربری */}
        <div className="nav-icons">
          {/* دکمه تغییر حالت تاریک/روشن */}
          <button
            className="icon-btn theme-toggle"
            onClick={onToggleDarkMode}
            title={darkMode ? "حالت روشن" : "حالت تاریک"}
          >
            {darkMode ? <FiSun /> : <FiMoon />}
          </button>

          {/* دکمه حساب کاربری */}
          <button className="icon-btn" title="حساب کاربری">
            <FiUser />
          </button>

          {/* سبد خرید با شمارنده */}
          <div className="nav-cart">
            <button
              ref={cartBtnRef}
              className="icon-btn cart-btn"
              onClick={onShowCart}
              onMouseEnter={() => setShowMiniCart(true)}
              title="سبد خرید"
            >
              <FiShoppingCart />
              {cartItemsCount > 0 && <span className="cart-counter">{cartItemsCount}</span>}
            </button>

            {/* مینی‌کارت */}
            {showMiniCart && cartItems.length > 0 && (
              <div
                ref={miniCartRef}
                className={`mini-cart ${darkMode ? "dark" : ""}`}
                onMouseLeave={() => setShowMiniCart(false)}
              >
                <h3>سبد خرید</h3>
                <div className="mini-cart-items">
                  {cartItems.slice(0, 3).map((item) => (
                    <div key={item.id} className="mini-cart-item">
                      <img
                        src={item.image || "https://via.placeholder.com/50"}
                        alt={item.name}
                        className="mini-cart-image"
                      />
                      <div className="mini-cart-details">
                        <h4>{item.name}</h4>
                        <div className="mini-cart-price">
                          <span>{item.quantity} × </span>
                          {item.discount > 0 ? (
                            <span>
                              {Math.round(item.price - (item.price * item.discount) / 100).toLocaleString()} تومان
                            </span>
                          ) : (
                            <span>{item.price.toLocaleString()} تومان</span>
                          )}
                        </div>
                      </div>
                    </div>
                  ))}

                  {cartItems.length > 3 && <div className="mini-cart-more">و {cartItems.length - 3} محصول دیگر...</div>}
                </div>

                <div className="mini-cart-total">
                  <span>مجموع:</span>
                  <span>{cartTotal.toLocaleString()} تومان</span>
                </div>

                <div className="mini-cart-actions">
                  <button className="view-cart-btn" onClick={onShowCart}>
                    مشاهده سبد خرید
                  </button>
                  <button className="checkout-btn">تکمیل خرید</button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
