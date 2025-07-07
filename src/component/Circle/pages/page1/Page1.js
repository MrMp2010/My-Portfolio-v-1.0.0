"use client"

import { useState, useEffect } from "react"
import Product from "./Product"
import Cart from "./Cart"
import Navbar from "./Navbar"
import Footer from "./Footer"
import "./page1.css"

const Page1 = () => {
  const [cartItems, setCartItems] = useState([])
  const [showCart, setShowCart] = useState(false)
  const [activeCategory, setActiveCategory] = useState("all")
  const [searchQuery, setSearchQuery] = useState("")
  const [darkMode, setDarkMode] = useState(false)

  // داده‌های محصولات با تصاویر و دسته‌بندی
  const products = [
    {
      id: 1,
      name: "لپتاپ ایسوس ROG",
      price: 35000000,
      image: "https://via.placeholder.com/200?text=Asus+ROG",
      category: "laptop",
      discount: 10,
      rating: 4.5,
      description: "لپتاپ گیمینگ با پردازنده قدرتمند و کارت گرافیک پیشرفته",
    },
    {
      id: 2,
      name: "لپتاپ لنوو Legion",
      price: 28000000,
      image: "https://via.placeholder.com/200?text=Lenovo+Legion",
      category: "laptop",
      discount: 0,
      rating: 4.2,
      description: "لپتاپ مخصوص بازی با صفحه نمایش با کیفیت و خنک‌کننده پیشرفته",
    },
    {
      id: 3,
      name: "گوشی سامسونگ S23",
      price: 18500000,
      image: "https://via.placeholder.com/200?text=Samsung+S23",
      category: "mobile",
      discount: 15,
      rating: 4.7,
      description: "گوشی هوشمند با دوربین فوق‌العاده و باتری با دوام",
    },
    {
      id: 4,
      name: "گوشی آیفون 14 پرو",
      price: 42000000,
      image: "https://via.placeholder.com/200?text=iPhone+14+Pro",
      category: "mobile",
      discount: 5,
      rating: 4.8,
      description: "گوشی هوشمند با پردازنده قدرتمند و دوربین حرفه‌ای",
    },
    {
      id: 5,
      name: "هدفون بی‌سیم سونی",
      price: 4500000,
      image: "https://via.placeholder.com/200?text=Sony+Headphones",
      category: "accessories",
      discount: 20,
      rating: 4.3,
      description: "هدفون بی‌سیم با کیفیت صدای فوق‌العاده و حذف نویز",
    },
    {
      id: 6,
      name: "ساعت هوشمند اپل",
      price: 12000000,
      image: "https://via.placeholder.com/200?text=Apple+Watch",
      category: "accessories",
      discount: 0,
      rating: 4.6,
      description: "ساعت هوشمند با قابلیت‌های سلامتی و تناسب اندام",
    },
    {
      id: 7,
      name: "تبلت سامسونگ Tab S8",
      price: 15800000,
      image: "https://via.placeholder.com/200?text=Samsung+Tab+S8",
      category: "tablet",
      discount: 8,
      rating: 4.4,
      description: "تبلت با صفحه نمایش بزرگ و قلم هوشمند برای طراحی",
    },
    {
      id: 8,
      name: "آیپد پرو 2023",
      price: 22500000,
      image: "https://via.placeholder.com/200?text=iPad+Pro+2023",
      category: "tablet",
      discount: 0,
      rating: 4.9,
      description: "تبلت حرفه‌ای با پردازنده قدرتمند و صفحه نمایش با کیفیت",
    },
  ]

  // فیلتر محصولات بر اساس دسته‌بندی و جستجو
  const filteredProducts = products
    .filter((product) => activeCategory === "all" || product.category === activeCategory)
    .filter(
      (product) =>
        searchQuery === "" ||
        product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.description.toLowerCase().includes(searchQuery.toLowerCase()),
    )

  // افزودن محصول به سبد خرید
  const handleAddToCart = (product) => {
    const existingItemIndex = cartItems.findIndex((item) => item.id === product.id)

    if (existingItemIndex >= 0) {
      // اگر محصول قبلاً در سبد خرید وجود دارد، تعداد آن را افزایش می‌دهیم
      const updatedCartItems = [...cartItems]
      updatedCartItems[existingItemIndex].quantity += 1
      setCartItems(updatedCartItems)
    } else {
      // اگر محصول در سبد خرید وجود ندارد، آن را با تعداد 1 اضافه می‌کنیم
      setCartItems([...cartItems, { ...product, quantity: 1 }])
    }

    // نمایش سبد خرید پس از افزودن محصول
    setShowCart(true)
  }

  // حذف محصول از سبد خرید
  const handleRemoveItem = (id) => {
    const newCart = cartItems.filter((item) => item.id !== id)
    setCartItems(newCart)
  }

  // تغییر تعداد محصول در سبد خرید
  const handleUpdateQuantity = (id, newQuantity) => {
    if (newQuantity < 1) {
      handleRemoveItem(id)
      return
    }

    const updatedCartItems = cartItems.map((item) => (item.id === id ? { ...item, quantity: newQuantity } : item))

    setCartItems(updatedCartItems)
  }

  // تغییر حالت تاریک/روشن
  const toggleDarkMode = () => {
    setDarkMode(!darkMode)
  }

  // اعمال کلاس حالت تاریک به body
  useEffect(() => {
    if (darkMode) {
      document.body.classList.add("dark-mode")
    } else {
      document.body.classList.remove("dark-mode")
    }
  }, [darkMode])

  return (
    <div className={`page-container ${darkMode ? "dark-mode" : ""}`}>
      <Navbar
        cartItems={cartItems}
        onSearch={setSearchQuery}
        searchQuery={searchQuery}
        darkMode={darkMode}
        onToggleDarkMode={toggleDarkMode}
        onShowCart={() => setShowCart(true)}
      />

      {/* بنر اصلی */}
      <div className="main-banner">
        <div className="banner-content">
          <h1>فروشگاه محصولات دیجیتال</h1>
          <p>بهترین محصولات با بهترین قیمت‌ها</p>
          <button className="shop-now-btn">همین حالا خرید کنید</button>
        </div>
      </div>

      {/* دسته‌بندی محصولات */}
      <div className="category-filter">
        <button
          className={`category-btn ${activeCategory === "all" ? "active" : ""}`}
          onClick={() => setActiveCategory("all")}
        >
          همه محصولات
        </button>
        <button
          className={`category-btn ${activeCategory === "laptop" ? "active" : ""}`}
          onClick={() => setActiveCategory("laptop")}
        >
          لپتاپ
        </button>
        <button
          className={`category-btn ${activeCategory === "mobile" ? "active" : ""}`}
          onClick={() => setActiveCategory("mobile")}
        >
          موبایل
        </button>
        <button
          className={`category-btn ${activeCategory === "tablet" ? "active" : ""}`}
          onClick={() => setActiveCategory("tablet")}
        >
          تبلت
        </button>
        <button
          className={`category-btn ${activeCategory === "accessories" ? "active" : ""}`}
          onClick={() => setActiveCategory("accessories")}
        >
          لوازم جانبی
        </button>
      </div>

      {/* نمایش محصولات */}
      <div className="products-section">
        <h2>
          {searchQuery
            ? `نتایج جستجو برای: ${searchQuery}`
            : `محصولات ${activeCategory === "all" ? "" : activeCategory}`}
        </h2>

        {filteredProducts.length === 0 ? (
          <div className="no-products">
            <p>محصولی یافت نشد!</p>
          </div>
        ) : (
          <div className="products-grid">
            {filteredProducts.map((product) => (
              <Product key={product.id} product={product} onAddToCart={handleAddToCart} darkMode={darkMode} />
            ))}
          </div>
        )}
      </div>

      {/* سبد خرید */}
      {showCart && (
        <div className="cart-overlay" onClick={() => setShowCart(false)}>
          <div className="cart-sidebar" onClick={(e) => e.stopPropagation()}>
            <button className="close-cart" onClick={() => setShowCart(false)}>
              ×
            </button>
            <Cart
              cartItems={cartItems}
              onRemoveItem={handleRemoveItem}
              onUpdateQuantity={handleUpdateQuantity}
              darkMode={darkMode}
            />
          </div>
        </div>
      )}

      {/* دکمه نمایش سبد خرید در موبایل */}
      <button className="floating-cart-btn" onClick={() => setShowCart(!showCart)}>
        <i className="fi fi-shopping-cart"></i>
        {cartItems.length > 0 && (
          <span className="floating-cart-counter">{cartItems.reduce((total, item) => total + item.quantity, 0)}</span>
        )}
      </button>

      {/* بخش ویژگی‌های فروشگاه */}
      <div className="features-section">
        <div className="feature">
          <div className="feature-icon">🚚</div>
          <h3>ارسال رایگان</h3>
          <p>برای سفارش‌های بالای 500 هزار تومان</p>
        </div>
        <div className="feature">
          <div className="feature-icon">⏱️</div>
          <h3>تحویل سریع</h3>
          <p>ارسال در کمتر از 24 ساعت</p>
        </div>
        <div className="feature">
          <div className="feature-icon">💰</div>
          <h3>ضمانت بازگشت وجه</h3>
          <p>7 روز ضمانت بازگشت</p>
        </div>
        <div className="feature">
          <div className="feature-icon">🔒</div>
          <h3>پرداخت امن</h3>
          <p>درگاه پرداخت امن و معتبر</p>
        </div>
      </div>

      {/* فوتر */}
      <Footer darkMode={darkMode} />
    </div>
  )
}

export default Page1
