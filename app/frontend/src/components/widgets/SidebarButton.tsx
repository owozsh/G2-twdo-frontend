import { ReactElement } from "react";

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
    <a
      href={route}
      className="w-full flex items-center mb-1 rounded-md px-2 py-1 cursor-default outline outline-0 outline-transparent hover:bg-slate-100 hover:outline-1 hover:outline-blue-200 transition active:scale-95"
    >
      <span className="flex items-center mr-3 child-icon:w-4">{icon}</span>
      <p>{label}</p>
    </a>
  );
}
