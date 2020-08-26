import React from "react";
import { Layout } from "antd";
import { Route, Switch } from "react-router-dom";
import MenuSider from "../components/MenuSider";
import MenuTop from "../components/MenuTop";

import "./LayoutUser.scss";

export default function LayoutUser(props) {
  const { routes } = props;
  const { Header, Content, Footer } = Layout;

  return (
    <Layout>
      <MenuSider />
      <Layout>
        <Header>
          <MenuTop />
        </Header>
        <Content>
          <LoadRoutes routes={routes} />
        </Content>
        <Footer>
          <h3> Footer del layout user</h3>
        </Footer>
      </Layout>
    </Layout>
  );
}

function LoadRoutes({ routes }) {
  return (
    <Switch>
      {routes.map((route, index) => (
        <Route
          key={index}
          path={route.path}
          exact={route.exact}
          component={route.component}
        />
      ))}
    </Switch>
  );
}
