import Home from "../pages/Home";
import About from "../pages/About";
import Contact from "../pages/Contact";

export const routes = [
  { path: "/", name: "Accueil", Component: Home },
  { path: "/a-propos", name: "A propos", Component: About, important: true },
  { path: "/contact", name: "Contact", Component: Contact },
];

const RoutingService = {
  routes,
};

export default RoutingService;
