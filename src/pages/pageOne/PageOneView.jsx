import React from "react";

import { BalancoPage } from "./balancoPart/BalancoPart";
import { Button, Tooltip } from "antd";
import { ArrowLeftOutlined } from "@ant-design/icons";
import { RazaoPart } from "./razaoPart/RazaoPart";
export const PageOneView = ({
  handlePesquisar,
  isPesquisando,
  dados,
  handleLimparDados,
  escreverFiltro,
  filtros,
  page,
  setPage,
}) => {
  return (
    <div className="w-full h-full flex justify-center items-center gap-4 flex-col relative">
      <div className="w-full">
        {page != "" && (
          <Tooltip title="Voltar">
            <Button
              type="primary"
              ghost
              shape="circle"
              icon={<ArrowLeftOutlined />}
              onClick={() => setPage("")}
            />
          </Tooltip>
        )}
      </div>
      {page == "" && (
        <>
          <h1 className="text-2xl">Qual pagina voce deseja?</h1>
          <Button type="primary" onClick={() => setPage("balanco")}>
            Balanço Financeiro
          </Button>
          <Button type="primary" onClick={() => setPage("razao")}>
            Razão
          </Button>
        </>
      )}

      {page == "balanco" && (
        <BalancoPage
          dados={dados}
          filtros={filtros}
          handleLimparDados={handleLimparDados}
          handlePesquisar={handlePesquisar}
          isPesquisando={isPesquisando}
          escreverFiltro={escreverFiltro}
        />
      )}
      {page == "razao" && <RazaoPart />}
    </div>
  );
};
