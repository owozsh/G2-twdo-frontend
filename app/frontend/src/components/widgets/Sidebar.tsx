import { Sun, Calendar, Package } from "react-feather";

import SidebarButton from "./SidebarButton";

export default function Sidebar() {
  return (
    <nav className="flex flex-col items-end h-full w-full">
      <ul className="w-full">
        <li>
          <SidebarButton
            label="today"
            icon={<Sun />}
            route="/today"
          ></SidebarButton>
        </li>
        <li>
          <SidebarButton
            label="upcoming"
            icon={<Calendar />}
            route="/upcoming"
          ></SidebarButton>
        </li>
        <li>
          <SidebarButton
            label="someday"
            icon={<Package />}
            route="/someday"
          ></SidebarButton>
        </li>
      </ul>
    </nav>
  );
}
