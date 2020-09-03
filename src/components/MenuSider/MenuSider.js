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

export default function MenuSider(props) {
  const { menuCollapsed } = props;
  const { Sider } = Layout;
  const { SubMenu, Item } = Menu;

  return (
    <Sider className="menu-sider" collapsed={menuCollapsed}>
      <Menu theme="dark" mode="inline" defaultSelectedKeys={"1"}>
        <Item key={"1"}>
          <Link to={"/user"}>
            <HomeOutlined />
            <span> Home </span>
          </Link>
        </Item>
        <SubMenu icon={<UserOutlined />} title="Paquete Usuario">
          <Item>
            <Link to={"/user/gestionarusuario"}>
              <span>Gestionar Usuario</span>
            </Link>
          </Item>
          <Item>
            <Link to={"/user/gestionarprivilegio"}>
              <span>Gestionar privilegio</span>
            </Link>
          </Item>
          <Item>
            <Link to={"/user/gestionarcliente"}>
              <span>Gestionar cliente</span>
            </Link>
          </Item>
          <Item>Gestionar cargos</Item>
          <Item>Gestionar personal</Item>
        </SubMenu>
        <SubMenu icon={<PropertySafetyOutlined />} title="paquete 2">
          <Item>item 1</Item>
          <Item>item 2</Item>
          <Item>item 3</Item>
          <Item>item 4</Item>
          <Item>item 5</Item>
        </SubMenu>
        <SubMenu icon={<TeamOutlined />} title="paquete 3">
          <Item>item 6</Item>
          <Item>item 7</Item>
          <Item>item 8</Item>
          <Item>item 9</Item>
          <Item>item 10</Item>
        </SubMenu>
        <Item key={"2"}>
          <Link to={"/user/item11"}>
            <span> item 11 </span>
          </Link>
        </Item>
        <Item key={"3"}>
          <Link to={"/user/item12"}>
            <span> item 12</span>
          </Link>
        </Item>
      </Menu>
    </Sider>
  );
}
