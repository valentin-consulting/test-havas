import React from "react";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";

const routes = [
  { path: "/", name: "Accueil", Component: Home },
  { path: "/a-propos", name: "A propos", Component: About },
  { path: "/contact", name: "Contact", Component: Contact },
];

export default function Router() {
  return <BrowserRouter></BrowserRouter>;
}
