import { Roboto } from "next/font/google";
import Sidebar from "@/app/components/Sidebar";
import Dashboard from "@/app/components/Dashboard";

const roboto = Roboto({
  weight: ["400", "500", "700"],
  subsets: ["latin"],
  display: "swap",
});

export default function Home() {
  return (
    <div className={`flex min-h-screen bg-[#13111c] ${roboto.className}`}>
      <Sidebar />
      <Dashboard />
    </div>
  );
}
