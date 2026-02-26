import './Home.css';
import { useState } from 'react';

/* =====================================================
   1️. Mảng Slides: chứa 3 hình slider trang chủ
   Dùng để hiển thị ảnh hero và chuyển slide
===================================================== */
const Slides = [
  "/images/slide1.jpg",
  "/images/slide2.jpg",
  "/images/slide3.jpg",
];

/* =====================================================
   2️. Mảng menus: chứa 6 hình món ăn
   Sau đó sẽ dùng .map() để render ra 6 ảnh
===================================================== */
const menus = [
  "/images/menu-01.jpg",
  "/images/menu-02.jpg",
  "/images/menu-03.jpg",
  "/images/menu-04.jpg",
  "/images/menu-05.jpg",
  "/images/menu-06.jpg",
];

function Home() {

  /* =====================================================
     3️. State current:
     - Lưu index của slide hiện tại
     - Mặc định = 0 (ảnh đầu tiên)
  ===================================================== */
  const [current, setCurrent] = useState(0);

  return (
    <div className="home">
      
      {/* =====================================================
          4️ Hero Section (Slider chính)
      ===================================================== */}
      <div className="slider">

        {/* Hiển thị ảnh theo index hiện tại */}
        <img 
          src={Slides[current]}   // lấy ảnh theo current
          alt="Home Page" 
        />

        {/* =====================================================
            5️. Nút chuyển slide (dots)
            Dùng Slides.map để tạo 3 nút tương ứng 3 ảnh
        ===================================================== */}
        <div className="slider-next">
          {
            Slides.map((_, i) => (
              <button
                key={i}   // key để React quản lý list
                className={`slider-next-button ${current === i ? "active" : ""}`}
                // Nếu current === i → thêm class active
                // để highlight nút đang được chọn

                onClick={() => setCurrent(i)}
                // Khi click → cập nhật current
                // → React re-render → đổi ảnh

                aria-label={`Go to slide ${i + 1}`}
                // Hỗ trợ accessibility
              />
            ))
          }
        </div>
      </div>

      {/* =====================================================
          6️ Menu Section (6 hình món ăn)
          Dùng menus.map để render 6 ảnh
      ===================================================== */}
      <div className="menu-row">
        {
          menus.map((menu, index) => (
            <img
              key={index}        // React cần key cho list
              src={menu}         // đường dẫn ảnh
              alt={`Menu ${index + 1}`} // alt cho SEO & accessibility
            />
          ))
        }
      </div>

      {/* =====================================================
          7️. Tiêu đề trang
      ===================================================== */}
      <h1 className="home-title">
        This is Home Page
      </h1>

    </div>
  );
}

export default Home;
//map là hàm của mảng trong JavaScript, dùng để duyệt qua từng phần tử của mảng và trả về một mảng mới sau khi đã áp dụng một hàm nào đó lên từng phần tử đó. Trong React, map thường được sử dụng để render một danh sách các phần tử dựa trên dữ liệu từ một mảng. Mỗi phần tử được render sẽ cần một thuộc tính key duy nhất để giúp React quản lý hiệu quả việc cập nhật và tái sử dụng các phần tử trong DOM.