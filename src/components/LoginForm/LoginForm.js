import React, { useState } from "react";
import { Form, Input, Button, notification } from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
import { signUpApi } from "../../api/user";

import "./LoginForm.scss";

export default function LoginForm() {
  const [inputs, setInputs] = useState({
    user: "",
    passw: "",
  });
  const changeForm = (e) => {
    setInputs({
      ...inputs,
      [e.target.name]: e.target.value,
    });
  };
  const register = async (e) => {
    e.preventDefault();
    const result = await signUpApi(inputs);
    if (!result.ok) {
      notification["error"]({
        message: result.mensaje,
      });
    } else {
      notification["success"]({
        message: result.mensaje,
      });
    }
    console.log(result);
  };

  return (
    <Form
      className="login-form"
      onSubmitCapture={register}
      onChange={changeForm}
    >
      <Form.Item>
        <Input
          prefix={<UserOutlined style={{ color: "rgba(0,0,0,.25)" }} />}
          name="user"
          placeholder="Usuario"
          className="login-form__input"
          value={inputs.user}
        />
      </Form.Item>
      <Form.Item>
        <Input
          prefix={<LockOutlined style={{ color: "rgba(0,0,0,.25)" }} />}
          type="password"
          name="passw"
          placeholder="Contraseña"
          className="login-form__input"
          value={inputs.passw}
        />
      </Form.Item>
      <Form.Item>
        <Button htmlType="submit" className="login-form__button">
          Ingresar
        </Button>
      </Form.Item>
    </Form>
  );
}
