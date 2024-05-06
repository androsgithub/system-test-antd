import { Badge, Tag, Tooltip, Tree } from "antd";
import React from "react";
import treeData from "../../../teste.json";

export const TreePart = () => {
  const organizar = (lista) => {
    lista.map((item) => {
      item["filhos"] = [];
      item["title"] = (
        <div className="flex gap-2 w-full">
          {item.id_pai && (
            <Tooltip title="ID DO PAI">
              <Badge color="lime" count={item.id_pai} />
            </Tooltip>
          )}
          <Tooltip title="ID">
            <Badge count={item.id} />
          </Tooltip>
          <p>{item.nome}</p>

          <Tag color="blue">{item.cargo}</Tag>
        </div>
      );
    });
    lista.map((item) => {
      let filhos = lista.filter((listItem) => listItem.id_pai == item.id);
      item["children"] = filhos;
    });
    lista = lista.filter((item) => item.id_pai == null);
    lista.map((item) => console.log(item));

    return lista;
  };
  const newLista = organizar(treeData);
  return (
    <div className="w-full h-full">
      <Tree
        showLine={true}
        treeData={newLista}
        className="capitalize w-full"
        selectable={false}
      ></Tree>
    </div>
  );
};
