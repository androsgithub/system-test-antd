import React from "react";
import { BreadcrumbModel } from "./BreadcrumbModel";
import { BreadcrumbView } from "./BreadcrumbView";

export const BreadcrumbModelView = () => {
  const model = BreadcrumbModel()

  return <>{model.location.pathname == "/" ? "" : <BreadcrumbView {...model} />}</>;
};
