import { ReactElement } from "react";

export default function Icon({
  icon,
  size,
}: {
  icon: ReactElement<any> | string;
  size: number;
}) {
  return (
    <span className={`flex items-center mr-3 child-icon:w-${size}`}>
      {icon}
    </span>
  );
}
