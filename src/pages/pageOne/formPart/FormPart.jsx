import React from "react";
import { Button, Input, Select, Tooltip } from "antd";
export const FormPart = ({
  handlePesquisar,
  isPesquisando,
  escreverFiltro,
  filtros,
}) => {
  return (
    <form className="flex flex-col w-full justify-center items-center gap-4">
      <Input
        placeholder="Insira o COD"
        className="w-[50%]"
        onInput={(e) => escreverFiltro({ COD: e.target.value })}
        value={filtros.COD}
      />
      <Select
        placeholder="Insira um Periodo"
        className="w-[50%]"
        onChange={(e) => escreverFiltro({ PERIOD: e })}
        value={filtros.PERIOD ? filtros.PERIOD : null}
      >
        <Select.Option value="JAN-23">JAN-23</Select.Option>
        <Select.Option value="JAN-24">JAN-24</Select.Option>
        <Select.Option value="FEB-23">FEB-23</Select.Option>
        <Select.Option value="MAR-24">MAR-24</Select.Option>
      </Select>
      <Tooltip title={filtros.PERIOD ? "" : "Insira um periodo"}>
        <Button
          type="primary"
          onClick={handlePesquisar}
          loading={isPesquisando}
          disabled={!filtros.PERIOD}
        >
          Procurar
        </Button>
      </Tooltip>
    </form>
  );
};
