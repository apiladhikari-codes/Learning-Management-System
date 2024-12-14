import { NavbarRoutes } from "@/components/navbar-routes";
import { MobileSidebar } from "./moblie-sidebar";

export const Navbar = () => {
  return (
    <div className="p-4 border-b h-full flex items-center bg-blue-500 shadow-sm ">
      {/* Menu Bar for small devices */}
      <MobileSidebar />

      <NavbarRoutes />
    </div>
  );
};
