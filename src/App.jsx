import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AllComponentsPage from "./pages/AllComponentsPage";
import BentoGridPage from "./pages/BentoGridPage";
import VerticalTimelinePage from "./pages/VerticalTimelinePage";
const App = () => {
  return (
    <div className="bg-gray-700 min-h-screen text-white/80">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<AllComponentsPage />} />
          <Route path="/bento-grid" element={<BentoGridPage />} />
          <Route path="/vertical-timeline" element={<VerticalTimelinePage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
export default App;
