import { Menu } from "antd";
import React from "react";
import { Link } from "react-router-dom";
import {
  ExclamationCircleOutlined,
  TrademarkCircleOutlined,
} from "@ant-design/icons";
import useContextStore from "../../Store/ContextStore";

export const Items = () => {
  const lista = [0];
  const handleExpandedClose = useContextStore(
    (state) => state.handleExpandedClose
  );
  return (
    <div className="h-[80vh] overflow-y-scroll sidebar">
      <Menu mode="inline" style={{ borderInlineEnd: "transparent" }}>
        <Menu.SubMenu
          title="Relatorios de Apoio"
          icon={<TrademarkCircleOutlined />}
        >
          {lista.map(() => (
            <Menu.Item key={Math.random()} onClick={handleExpandedClose}>
              <span>{Math.random()}</span>
              <Link to="/relatorios-de-apoio/item1" />
            </Menu.Item>
          ))}
        </Menu.SubMenu>
        <Menu.SubMenu
          title="Relatorios de Apoio - Restrito"
          icon={<ExclamationCircleOutlined />}
        >
          <Menu.SubMenu title="Relatorios Oracle">
            {lista.map(() => (
              <Menu.Item key={Math.random()}>
                <span>{Math.random()}</span>
                <Link to="/relatorios2" />
              </Menu.Item>
            ))}
          </Menu.SubMenu>
          <Menu.SubMenu title="Poggers">
            {lista.map(() => (
              <Menu.Item key={Math.random()}>
                <span>{Math.random()}</span>
                <Link to="/relatorios" />
              </Menu.Item>
            ))}
          </Menu.SubMenu>
          <Menu.SubMenu title="Bobibna">
            {lista.map(() => (
              <Menu.Item key={Math.random()}>
                <span>{Math.random()}</span>
                <Link to="/relatorios" />
              </Menu.Item>
            ))}
          </Menu.SubMenu>
        </Menu.SubMenu>
      </Menu>
    </div>
  );
};
