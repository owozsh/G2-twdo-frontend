import { FiPlus } from "react-icons/fi";
import Clickable from "../common/Clickable";
import Icon from "../common/Icon";

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
        className="w-8 h-8 justify-center items-center"
        onClick={onAddButtonClick}
        type="button"
      >
        <Icon icon={<FiPlus size="1.25rem" strokeWidth="3px" />} />
      </Clickable>
    </header>
  );
}
