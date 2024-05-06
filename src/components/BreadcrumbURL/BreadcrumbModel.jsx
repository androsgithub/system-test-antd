import React from "react";
import { useLocation } from "react-router-dom";

export const BreadcrumbModel = () => {
  const location = useLocation();
  const localLocation = location.pathname.split("/");
  localLocation.shift();

  return { location, localLocation };
};
