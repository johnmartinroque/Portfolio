import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./screens/Home";
import Header from "./components/others/Header";
import Contact from "./screens/Contact";
import ProjectDetailed from "./screens/detailed/ProjectDetailed";
import "./App.css";

function App() {
  return (
    <div className="min-h-screen bg-[#E2E4F8] text-black dark:bg-gray-900 dark:text-white">
      <Router>
        <Header />
        <Routes>
          <Route element={<Home />} path="/" />
          {/*   <Route element={<Contact />} path="/contact" /> */}
          <Route element={<ProjectDetailed />} path="/project/:id" />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
