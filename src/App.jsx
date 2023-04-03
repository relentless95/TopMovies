import { useState } from "react";
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'
import MovieList from "./Components/MovieList";
import { Route, Routes } from "react-router-dom";
import NavBar from "./Components/NavBar";
import HomePage from "./pages/HomePage";
import ErrorPage from "./pages/ErrorPage";
import DetailsPage from "./pages/DetailsPage";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
import ExplorePage from "./pages/ExplorePage";
import Footer from "./Components/Footer";
// import comments from "./comments.json"

function App() {
  // const [count, setCount] = useState(0)
  // const [comments,setComments] = useState(comments)

  return (
    <div className="App">
      <NavBar />
      {/* <MovieList/> */}
      <Routes>
        <Route path="/" element={<ExplorePage />} />

        <Route path="/home" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/details" element={<DetailsPage />} />
        <Route path="/contactUs" element={<ContactPage />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
