import axios from "axios";
import { useState } from "react";
export const usePageOneModel = () => {
  const [page, setPage] = useState("");
  const [isPesquisando, setIsPesquisando] = useState(false);
  const [dados, setDados] = useState();
  const [filtros, setFiltros] = useState({ COD: "", PERIOD: "" });
  const escreverFiltro = (e) => {
    setFiltros({ ...filtros, ...e });
    console.log({ ...filtros, ...e });
  };
  const handlePesquisar = async () => {
    if (filtros.PERIOD) {
      setIsPesquisando(true);
      setTimeout(async () => {
        const dadosGet = await axios.get(
          "https://jsonplaceholder.typicode.com/comments"
        );
        setDados(dadosGet.data);

        setIsPesquisando(false);
      }, 1000);
    }
  };
  const handleLimparDados = () => {
    setDados();
  };
  return {
    isPesquisando,
    handlePesquisar,
    dados,
    handleLimparDados,
    escreverFiltro,
    filtros,
    page,
    setPage,
  };
};
