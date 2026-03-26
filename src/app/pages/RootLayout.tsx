import { Outlet } from "react-router";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import { FloatingWhatsAppButton } from "../components/FloatingWhatsAppButton";

export function RootLayout() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Outlet />
      <Footer />
      <FloatingWhatsAppButton />
    </div>
  );
}
