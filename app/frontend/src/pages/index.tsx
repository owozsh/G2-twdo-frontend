import AppLayout from "../components/layouts/AppLayout";
import SidebarButton from "../components/widgets/SidebarButton";

export default function App() {
  return (
    <AppLayout>
      <SidebarButton label="test" icon="🎐" route="test" />
    </AppLayout>
  );
}
