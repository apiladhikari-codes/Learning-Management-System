"use client";

import { Compass, Layout } from "lucide-react";
import { SideBarItem } from "./sidebar-item";

// Creating Sidebar Routes
const guestRoutes = [
  {
    icon: Layout,
    label: "Dashboard",
    href: "/",
  },
  {
    icon: Compass,
    label: "Browser Courses",
    href: "/search",
  },
];

export const SidebarRoutes = () => {
  const routes = guestRoutes;

  return (
    <div className="flex flex-col w-full">
      {routes.map((route) => (
        <SideBarItem
          key={route.href}
          icon={route.icon}
          label={route.label}
          href={route.href}
        />
      ))}
    </div>
  );
};
