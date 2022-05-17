import Sidebar from "../widgets/Sidebar";
// import TaskView from "../components/UI/TaskView";

export default function AppLayout({
  children,
}: {
  children: JSX.Element | JSX.Element[];
}) {
  return (
    <div className="flex items-center h-full">
      <Sidebar />
      {/* <TaskView>{children}</TaskView> */}
      <div className="flex-1"></div>
    </div>
  );
}
