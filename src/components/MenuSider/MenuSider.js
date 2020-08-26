import React from "react";
import { Link } from "react-router-dom";
import { Layout, Menu } from "antd";

import "./MenuSider.scss";
import {
  HomeOutlined,
  UserOutlined,
  PropertySafetyOutlined,
  TeamOutlined,
} from "@ant-design/icons";

export default function MenuSider() {
  const { Sider } = Layout;
  const { Item } = Menu;

  return (
    <Sider className="menu-sider">
      <Menu theme="dark" mode="inline">
        <Item>
          <Link to={"/"}>
            <HomeOutlined />
            <span> Home </span>
          </Link>
        </Item>
        <Item>
          <Link to={"/user/usuarios"}>
            <UserOutlined />
            <span> Gestionar Usuarios</span>
          </Link>
        </Item>
        <Item>
          <Link to={"/user/privilegios"}>
            <PropertySafetyOutlined />
            <span> Gestionar privilegios </span>
          </Link>
        </Item>
        <Item>
          <Link to={"/user/cargos"}>
            <TeamOutlined />
            <span> Gestionar Cargos</span>
          </Link>
        </Item>
      </Menu>
    </Sider>
  );
}
