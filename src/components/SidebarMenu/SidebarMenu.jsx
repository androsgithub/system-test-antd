import { useEffect, useState } from "react";
import { PieChartOutlined, UserOutlined } from "@ant-design/icons";
import useContextStore from "../../Store/ContextStore";
import { Avatar, Layout } from "antd";
import { Items } from "./Items";
import { Link } from "react-router-dom";
import logo from "./../../assets/logo.jpg";
const { Sider } = Layout;
export const SidebarMenu = () => {
  const { expanded, handleExpanded, handleExpandedClose } = useContextStore(
    (state) => ({
      expanded: state.expanded,
      handleExpanded: state.handleExpanded,
      handleExpandedClose: state.handleExpandedClose,
    })
  );

  return (
    <Sider
      collapsible
      collapsed={expanded}
      onCollapse={() => handleExpanded()}
      theme="light"
      width={270}
      className="relative h-[100vh]"
    >
      <div className="flex justify-center items-center p-3">
        <Link to="/" onClick={handleExpandedClose}>
          <img src={logo} className="w-[3rem] h-[3rem] object-cover" />
        </Link>
      </div>

      <Items />
      <div
        className={`transition-all duration-500 absolute p-2 w-full bg-[#f3f3f3] flex items-center ${
          !expanded ? "justify-between" : "justify-center"
        }`}
      >
        <Avatar src={logo} size={48}/>
        <p
          className={`transition-all duration-200 text-right ${
            expanded ? "w-0 opacity-0" : "w-[80%] opacity-100"
          }`}
        >
          Username
        </p>
      </div>
    </Sider>
  );
};
