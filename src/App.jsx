import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AllComponentsPage from "./pages/AllComponentsPage";
import BentoGridPage from "./pages/BentoGridPage";
import VerticalTimelinePage from "./pages/VerticalTimelinePage";
import NavbarPage from "./pages/NavbarPage";
import CardsPage from "./pages/CardsPage";
import AllInformationSectionsPage from "./pages/AllInformationSectionsPage";
import AllHeadersPage from "./pages/AllHeadersPage";
import BentoGridPlayground from "./pages/playgrounds/BentoGridPlayground";
import AllButtonsPage from "./pages/AllButtonsPage";

const App = () => {
  return (
    <div className="bg-gray-700 min-h-screen text-white/80">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<AllComponentsPage />} />
          <Route
            path="/information-sections"
            element={<AllInformationSectionsPage />}
          />
          <Route path="/bento-grid" element={<BentoGridPage />} />
          <Route path="/vertical-timeline" element={<VerticalTimelinePage />} />
          <Route path="/navbars" element={<NavbarPage />} />
          <Route path="/cards" element={<CardsPage />} />
          <Route path="/headers" element={<AllHeadersPage />} />
          <Route path="/buttons" element={<AllButtonsPage />} />
          {/* PLAYGROUNDS */}
          <Route
            path="/playground/bentogrid"
            element={<BentoGridPlayground />}
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
export default App;
