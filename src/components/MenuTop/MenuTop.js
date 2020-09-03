import React from "react";
//import { Link } from "react-router-dom";
import { Button } from "antd";

import "./MenuTop.scss";
import { MenuOutlined, PoweroffOutlined } from "@ant-design/icons";

export default function MenuTop(props) {
  const { menuCollapsed, setMenuCollapsed } = props;

  return (
    <div className="menu-top">
      <div className="menu-top__left">
        <Button type="link" onClick={() => setMenuCollapsed(!menuCollapsed)}>
          <MenuOutlined />
          <span> Menu </span>
        </Button>
      </div>
      <div className="menu-top__right">
        <Button type="link" onClick={() => console.log("salir login")}>
          <PoweroffOutlined />
          <span> Salir </span>
        </Button>
      </div>
    </div>
  );
}
