import React from "react";
import { usePageOneModel } from "./usePageOneModel";
import { PageOneView } from "./PageOneView";

export const PageOneModelView = () => {
  const pageOneViewModel = usePageOneModel();
  return <PageOneView {...pageOneViewModel} />;
};
