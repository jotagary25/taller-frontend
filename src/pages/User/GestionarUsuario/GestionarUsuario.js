import React, { useState, useEffect } from "react";
import { Table, Tag, Space } from "antd";
import { getAllUsuarios } from "../../../api/user";

import "./GestionarUsuario.scss";

export default function GestionarUsuario() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    getAllUsuarios().then((response) => {
      setUsers(response);
    });
  });

  console.log(users);
  console.log(users.data);

  const rowData = [
    {
      key: "1",
      name: "Erick",
      age: "27",
      address: "plan 3000",
      position: ["administrador"],
    },
    {
      key: "2",
      name: "Mefistones",
      age: "28",
      address: "villa 1° de mayo",
      position: ["empleado"],
    },
    {
      key: "3",
      name: "leonidas",
      age: "29",
      address: "pampa de la isla",
      position: ["cliente"],
    },
    {
      key: "4",
      name: "jerjes",
      age: "30",
      address: "La colorada",
      position: ["cliente"],
    },
  ];
  const columnHeader = [
    {
      title: "NOMBRE",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "EDAD",
      dataIndex: "age",
      key: "age",
    },
    {
      title: "DIRECCIÓN",
      dataIndex: "address",
      key: "address",
    },
    {
      title: "CARGO",
      key: "position",
      dataIndex: "position",
      // render: (position) => (
      //   <>
      //     {position.map((positio) => {
      //       let color = positio === "administrador" ? "volcano" : "geekblue";
      //       if (positio === "cliente") {
      //         color = "green";
      //       }
      //       return (
      //         <Tag color={color} key={positio}>
      //           {positio.toUpperCase()}
      //         </Tag>
      //       );
      //     })}
      //   </>
      // ),
    },
    {
      title: "ACCIONES",
      key: "name",
      // render: (text) => (
      //   <Space size="middle">
      //     <a> Modificar </a>
      //     <a> Borrar </a>
      //   </Space>
      // ),
    },
  ];

  // return <Table columns={columnHeader} dataSource={rowData} />;
  return (
    <div>
      <h2> pagina de gestionar usuario</h2>
    </div>
  );
}
