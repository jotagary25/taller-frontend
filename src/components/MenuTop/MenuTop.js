import React from "react";
import { Link } from "react-router-dom";
import { Button } from "antd";

import "./MenuTop.scss";
import { MenuOutlined, PoweroffOutlined } from "@ant-design/icons";

export default function MenuTop() {
  return (
    <div className="menu-top">
      <div className="menu-top__left">
        <Button type="link">
          <MenuOutlined />
          <span> Menu </span>
        </Button>
      </div>
      <div className="menu-top__right">
        <Button>
          <PoweroffOutlined />
          <span> Salir </span>
        </Button>
      </div>
    </div>
  );
}
