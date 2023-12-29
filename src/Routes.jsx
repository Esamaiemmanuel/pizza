import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "pages/Home";
import NotFound from "pages/NotFound";
const LandingPageFive = React.lazy(() => import("pages/LandingPageFive"));
const ProjectRoutes = () => {
  return (
    <React.Suspense fallback={<>Loading...</>}>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/landingpagefive" element={<LandingPageFive />} />
        </Routes>
      </Router>
    </React.Suspense>
  );
};
export default ProjectRoutes;
