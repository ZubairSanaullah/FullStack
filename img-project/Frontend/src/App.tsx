import { BrowserRouter as Router, Routes, Route } from "react-router-dom" 
import CreatePost from "./pages/CreatePost"

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/create-post" element={<CreatePost />} />
        <Route path="/about" element={<h1 className="">About Us</h1>} />
      </Routes>
    </Router>
  )
}

export default App