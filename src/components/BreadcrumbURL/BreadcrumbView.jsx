import React from "react";
import { Breadcrumb, Tag } from "antd";

export const BreadcrumbView = ({ localLocation }) => {
  return (
    <Breadcrumb className="mb-4">
      {localLocation.map((item) => (
        <Breadcrumb.Item>
          <Tag>{item} </Tag>
        </Breadcrumb.Item>
      ))}
    </Breadcrumb>
  );
};
