import React from "react";
import { Routes, Route } from "react-router-dom";
import { Initial } from "../../pages/initial/Initial";
import { ErrorPage } from "../../pages/error/ErrorPage";
import { PageOneModelView } from "../../pages/pageOne/PageOneModelView";
export const RoutesContent = () => {
  return (
    <Routes>
      <Route path="/" element={<Initial />} />
      <Route path="/relatorios-de-apoio/item1" element={<PageOneModelView />} />
      <Route path="*" element={<ErrorPage />} />
    </Routes>
  );
};
