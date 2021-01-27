import "./style.scss";
import MenuButton from "../MenuButton";
import RoutingService from "../../services/RoutingService";

export default function Menu() {
  return (
    <menu class="Menu">
      {RoutingService.routes.map((route) => {
        return (
          <MenuButton
            key={route.path}
            path={route.path}
            important={route.important}
          >
            {route.name}
          </MenuButton>
        );
      })}
    </menu>
  );
}
