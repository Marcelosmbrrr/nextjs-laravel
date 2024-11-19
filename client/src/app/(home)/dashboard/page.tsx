import { useAuth } from "@/hooks/auth";

export const metadata = {
  title: "Laravel - Dashboard",
};

export default function Dashboard() {
  return (
    <div className="grid auto-rows-min gap-4 md:grid-cols-3">
      <p>Dashboard</p>
    </div>
  );
}
