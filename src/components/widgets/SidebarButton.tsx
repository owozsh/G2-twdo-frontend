import { ReactElement } from "react";
import { Link } from "react-router-dom";

export default function SidebarButton({
  label,
  icon,
  route,
}: {
  label: string;
  icon: ReactElement | string;
  route: string;
}) {
  return (
    <Link
      to={`${route}`}
      className="w-full flex items-center mb-1 px-2 py-1 clickable"
    >
      <span className="flex items-center mr-3 child-icon:w-4">{icon}</span>
      <p className="font-bold">{label.toLowerCase()}</p>
    </Link>
  );
}