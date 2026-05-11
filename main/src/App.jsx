import { BrowserRouter, Routes, Route } from "react-router-dom";
import MCO from "./pages/MCO/MajorCourseOutput";

import Activity1 from "./pages/Activities/Activity-1/Activity1";
import Activity2 from "./pages/Activities/Activity-2/Activity2";
import Activity3 from "./pages/Activities/Activity-3/Barbie";
import Activity4 from "./pages/Activities/Activity-4/BarbieDetail";

import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MCO />} />
        <Route path="/Activity-1" element={<Activity1 />} />
        <Route path="/Activity-2" element={<Activity2 />} />
        <Route path="/Activity-3" element={<Activity3 />} />
        <Route path="/Activity-4" element={<Activity4 />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;