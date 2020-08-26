import React from "react";
import { Layout } from "antd";
import { Route, Switch } from "react-router-dom";

import "./LayoutBasic.scss";

export default function LayoutBasic(props) {
  const { Header, Content, Footer } = Layout;
  const { routes } = props;

  return (
    <Layout>
      <h2> este es el layout basic </h2>
      <Layout>
        <Header>
          <h3> Header de layout basic </h3>
        </Header>
        <Content>
          <LoadRoutes routes={routes} />
        </Content>
        <Footer>
          <h3> Footer de layout basic </h3>
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
