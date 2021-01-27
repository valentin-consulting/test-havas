import React, { Fragment } from "react";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import Menu from "./components/Menu";

export default function Router() {
  return (
    <Fragment>
      <BrowserRouter>
        <Menu />
      </BrowserRouter>
    </Fragment>
  );
}
