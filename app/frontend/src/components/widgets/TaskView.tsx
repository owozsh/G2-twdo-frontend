export default function TaskView({
  children,
}: {
  children?: JSX.Element[] | JSX.Element;
}) {
  return <ul className="shrink h-full w-full">{children}</ul>;
}
