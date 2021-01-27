import React, { Fragment } from "react";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import Menu from "./components/Menu";
import RoutingService from "./services/RoutingService";
import { CSSTransition } from "react-transition-group";
import "./App.scss";

export default function Router() {
  return (
    <BrowserRouter>
      <Menu />
      <div className="fade-transition">
        {RoutingService.routes.map((route) => (
          <Route key={route.path} exact path={route.path}>
            {({ match }) => (
              <CSSTransition
                in={match != null}
                timeout={300}
                classNames="fade-transition__item"
                unmountOnExit
              >
                <route.Component />
              </CSSTransition>
            )}
          </Route>
        ))}
      </div>
    </BrowserRouter>
  );
}
