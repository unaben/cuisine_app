import React from "react";
import Home from "./Home";
import { Route, Routes, useLocation } from "react-router-dom";
import Cuisine from "./Cuisine";
import RenderSearchCuisine from "./RenderSearchCuisine";
import Recipe from "./Recipe";
import { AnimatePresence } from "framer-motion";

const Pages = () => {
  const location = useLocation();
  return (
    <AnimatePresence mode="wait">
      <Routes
        // Location={location}
        key={location.pathname}
      >
        <Route path="/" element={<Home />} />
        <Route path="/cuisine/:type" element={<Cuisine />} />
        <Route
          path="/search/:search"
          element={<RenderSearchCuisine />}
        />
        <Route path="/recipe/:name" element={<Recipe />} />
      </Routes>
    </AnimatePresence>
  );
};

export default Pages;
