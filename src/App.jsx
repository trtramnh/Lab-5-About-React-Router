
import { Routes, Route , NavLink} from 'react-router-dom'
import './App.css'


{/*import page*/}
import Home from './pages/Home'
import About from './pages/About'
import News from './pages/News'
import Quiz from './pages/Quiz'
import Contact from './pages/Contact'



function App() {
  return (
    <div>
      {/*một cái điều hướng tới các UI mà không chuyển trang mới, sử dụng react-router-dom*/}
      {/* Navigation Bar */}
      <nav>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/news">News</NavLink>
        <NavLink to="/quiz">Quiz</NavLink>
        <NavLink to="/contact">Contact</NavLink>
      </nav>
      {/* Route Configuration là cấu hình các đường dẫn và component tương ứng, sử dụng react-router-dom*/}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/news" element={<News />} />
        <Route path="/quiz" element={<Quiz />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  )
}
export default App;
