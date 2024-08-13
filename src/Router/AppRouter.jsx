import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import NotFound from "../pages/NotFound";
import MainLayout from "../layouts/MainLayout";
import Analytics from "../pages/Analytics";
import Campaigns from "../pages/Campaigns";
import Ads from "../pages/Ads";
import Metrics from "../pages/Metrics";

const AppRouter = () => {
  return (
    <BrowserRouter basename="/analytical-dashboard">
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route element={<Navigate to="/" replace />}/>
          <Route index element={<Analytics />} />
          <Route
            path="google-ads"
            element={<Campaigns />}
          />
          <Route path="meta-ads" element={<Ads />} />
          <Route path="metricas" element={<Metrics />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
