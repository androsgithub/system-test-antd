import React from "react";
import Column from "antd/es/table/Column";
import ColumnGroup from "antd/es/table/ColumnGroup";
import { Table, Tag } from "antd";
export const TablePart = ({ dados, filtros }) => {
  return (
    <Table dataSource={dados}>
      <ColumnGroup
        title={Object.keys(filtros).map(
          (item) =>
            filtros[item] && (
              <>
                {item} : <Tag color="blue"> {filtros[item]}</Tag>
              </>
            )
        )}
      >
        {Object.keys(dados[0]).map((item) => (
          <Column
            title={item}
            dataIndex={item}
            key={item}
            className="capitalize"
          />
        ))}
      </ColumnGroup>
    </Table>
  );
};
