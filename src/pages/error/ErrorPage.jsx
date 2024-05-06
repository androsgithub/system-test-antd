import React, { useEffect } from "react";
import { Alert, notification } from "antd";

export const ErrorPage = () => {
  const [api, contextHolder] = notification.useNotification();
  const openNotification = () => {
    api.open({
      message: `Pagina nao encontrada`,
      type: "error",
      duration: 2,
    });
  };
  useEffect(() => {
    openNotification();
  }, []);

  return (
    <div className="flex justify-center items-center h-full w-full flex-col gap-4">
      <Alert
        message="Pagina não encontrada"
        type="error"
        className="text-red-400"
      />
      <p className="text-red-400">Tente novamente mais tarde.</p>
      {contextHolder}
    </div>
  );
};
