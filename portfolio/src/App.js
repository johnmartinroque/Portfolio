import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./screens/Home";
import Header from "./components/others/Header";
import Contact from "./screens/Contact";
import TaskHiveDetailed from "./screens/detailed/TaskHiveDetailed";
function App() {
  return (
    <div className="min-h-screen bg-gray-50 text-black dark:bg-gray-900 dark:text-white">
      <Router>
        <Header />
        <Routes>
          <Route element={<Home />} path="/" />
          <Route element={<Contact />} path="/contact" />
          <Route element={<TaskHiveDetailed />} path="taskhivedetailed" />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
