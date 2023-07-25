import { createContext, useContext, useState } from "react";
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
import InfoPage from "./pages/InfoPage";
import LatestPage from "./pages/LatestPage";
import { ThemeContext } from "./utils/Theme";
import SearchPage from "./pages/SearchPage";

// import { CgSun } from "react-icons/cg";
// import { HiMoon } from "react-icons/hi";

// export const ThemeContext = createContext(null);

// import comments from "./comments.json"

function App() {
  // const [count, setCount] = useState(0)
  // const [comments,setComments] = useState(comments)
  // const [theme, setTheme] = useState("dark");
  // const [icon, setIcon] = useState(CgSun)

  // const toggleTheme = () => {
  //   setTheme((curr) => (curr === "dark" ? "light" : "dark"));
  // };

  // const toggleIcon = () => {
  //   console.log("clicked on icon")
  //   setIcon((curr) => (curr === HiMoon ? CgSun : HiMoon));
  // };

  const { theme } = useContext(ThemeContext);

  return (
    <div className={`${theme}`}>
      <div className="super-main-container">
        {/* <ThemeContext.Provider value={{ theme, toggleTheme }}> */}
        <NavBar />
        {/* <MovieList/> */}
        <Routes>
          <Route path="/" element={<ExplorePage />} />

          <Route path="/home" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/details" element={<DetailsPage />} />
          <Route path="/movie/:movieId" element={<InfoPage />} />
          <Route path="/latest" element={<LatestPage />} />
          <Route path="/contactUs" element={<ContactPage />} />
          <Route path="/contactUs" element={<ContactPage />} />
          <Route path="*" element={<ErrorPage />} />
          <Route path="/search" element={<SearchPage />} />
        </Routes>
        <Footer />
        {/* </ThemeContext.Provider> */}
      </div>
    </div>
  );
}

export default App;
