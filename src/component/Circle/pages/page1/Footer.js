"use client"
import { FiInstagram, FiTwitter, FiLinkedin, FiYoutube } from "react-icons/fi"
import "./Footer.css"

const Footer = ({ darkMode }) => {
  return (
    <footer className={`footer ${darkMode ? "dark" : ""}`}>
      <div className="footer-content">
        <div className="footer-section">
          <h3>دسترسی سریع</h3>
          <ul>
            <li>
              <a href="#">صفحه اصلی</a>
            </li>
            <li>
              <a href="#">محصولات</a>
            </li>
            <li>
              <a href="#">تخفیف‌ها</a>
            </li>
            <li>
              <a href="#">درباره ما</a>
            </li>
            <li>
              <a href="#">تماس با ما</a>
            </li>
          </ul>
        </div>

        <div className="footer-section">
          <h3>خدمات مشتریان</h3>
          <ul>
            <li>
              <a href="#">سوالات متداول</a>
            </li>
            <li>
              <a href="#">راهنمای خرید</a>
            </li>
            <li>
              <a href="#">شرایط بازگشت کالا</a>
            </li>
            <li>
              <a href="#">حریم خصوصی</a>
            </li>
            <li>
              <a href="#">پشتیبانی</a>
            </li>
          </ul>
        </div>

        <div className="footer-section">
          <h3>دسته‌بندی محصولات</h3>
          <ul>
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
            <li>
              <a href="#">گجت‌های هوشمند</a>
            </li>
          </ul>
        </div>

        <div className="footer-section contact">
          <h3>تماس با ما</h3>
          <p>
            <strong>آدرس:</strong> تهران، خیابان ولیعصر، پلاک 123
          </p>
          <p>
            <strong>تلفن:</strong> 021-12345678
          </p>
          <p>
            <strong>ایمیل:</strong> info@techshop.com
          </p>

          <div className="social-icons">
            <a href="#" className="social-icon">
              <FiInstagram />
            </a>
            <a href="#" className="social-icon">
              <FiTwitter />
            </a>
            <a href="#" className="social-icon">
              <FiLinkedin />
            </a>
            <a href="#" className="social-icon">
              <FiYoutube />
            </a>
          </div>
        </div>

        <div className="footer-section newsletter">
          <h3>عضویت در خبرنامه</h3>
          <p>برای اطلاع از آخرین محصولات و تخفیف‌ها در خبرنامه ما عضو شوید</p>
          <div className="newsletter-form">
            <input type="email" placeholder="ایمیل خود را وارد کنید" className={darkMode ? "dark" : ""} />
            <button className="subscribe-btn">عضویت</button>
          </div>
        </div>
      </div>

      <div className="payment-methods">
        <span>روش‌های پرداخت:</span>
        <div className="payment-icons">
          <div className="payment-icon">💳</div>
          <div className="payment-icon">💰</div>
          <div className="payment-icon">🏦</div>
          <div className="payment-icon">💵</div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© تمامی حقوق محفوظ است - فروشگاه دیجیتال 1402</p>
      </div>
    </footer>
  )
}

export default Footer
