import './Home.css';
import { useState } from 'react';

const Slides = [
  "/images/slide1.jpg",
  "/images/slide2.jpg",
  "/images/slide3.jpg",
]

{/*tạo 1 biến menu để lưu 6 ảnh thức ăn vào
  lúc sau chạy function Home bằng map gồm menu,index =>
  img key = index
  src = menu
  alt  */}
const menus = [
  "/images/menu-01.jpg",
  "/images/menu-02.jpg",
  "/images/menu-03.jpg",
  "/images/menu-04.jpg",
  "/images/menu-05.jpg",
  "/images/menu-06.jpg",
]


function Home() {

  const [current, setCurrent] = useState(0);

  return (
    <div className="home">
      <div className="hero">
        <img src={Slides[current]} alt="Home Page" />

        <div className="hero-next"> {
          Slides.map((_, i) => (
            <button
              key={i}
              className={`hero-next-button ${current === i ? "active" : ""}`}
              onClick={() => setCurrent(i)}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>
      </div>
      <div className="menu-row">
        {menus.map((menu, index) => (
          <img
            key={index}
            src={menu}
            alt={""} />
        ))}
      </div>
      <h1 className="home-title">This is Home Page</h1>
    </div>
  );
}
export default Home;