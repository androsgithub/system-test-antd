import { TablePart } from "../tablePart/TablePart";
import { FormPart } from "../formPart/FormPart";
import { Button, Tooltip } from "antd";
import { ArrowLeftOutlined } from "@ant-design/icons";
export const BalancoPage = ({
  dados,
  filtros,
  handleLimparDados,
  handlePesquisar,
  isPesquisando,
  escreverFiltro,
}) => {
  return (
    <>
      <h1 className="text-3xl mb-5">Balanço Financeiro</h1>
      {dados ? (
        <>
          <div className="w-full">
            <Tooltip title="Voltar">
              <Button
                type="primary"
                onClick={handleLimparDados}
                icon={<ArrowLeftOutlined />}
              >
                Fazer outra pesquisa
              </Button>
            </Tooltip>
          </div>
          <TablePart dados={dados} filtros={filtros} />
        </>
      ) : (
        <FormPart
          handlePesquisar={handlePesquisar}
          isPesquisando={isPesquisando}
          escreverFiltro={escreverFiltro}
          filtros={filtros}
        />
      )}
    </>
  );
};
