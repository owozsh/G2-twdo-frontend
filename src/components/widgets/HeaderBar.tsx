import { Plus } from "react-feather";
import Clickable from "../ui/Clickable";

export default function HeaderBar({
  title,
  onAddButtonClick,
}: {
  title: string;
  onAddButtonClick?: () => void;
}) {
  return (
    <header className="flex items-center justify-between w-full row-span-1 col-span-3 place-self-center">
      <h1 className="text-3xl font-semibold">{title.toUpperCase()}</h1>
      <Clickable
        className="w-8 h-8 border-none justify-center items-center child-icon:w-8"
        onClick={onAddButtonClick}
        type="button"
      >
        <Plus />
      </Clickable>
    </header>
  );
}
