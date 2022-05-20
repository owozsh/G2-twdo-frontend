import { ReactElement } from "react";

export default function Icon({
  icon,
  size,
  className,
}: {
  icon: ReactElement<any> | string;
  size: number;
  className?: string;
}) {
  return (
    <span className={`flex items-center child-icon:w-${size} ${className}`}>
      {icon}
    </span>
  );
}
