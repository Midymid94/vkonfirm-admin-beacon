
import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import {
  Sidebar,
  SidebarContent,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarTrigger,
  useSidebar,
} from "@/components/ui/sidebar";
import { cn } from "@/lib/utils";
import { LayoutDashboard, Users, ShoppingCart, Settings as SettingsIcon, Building } from 'lucide-react';

const navItems = [
  { title: "Dashboard", href: "/admin/dashboard", icon: LayoutDashboard },
  { title: "Companies", href: "/admin/companies", icon: Building },
  { title: "Users", href: "/admin/users", icon: Users },
  { title: "Subscriptions", href: "/admin/subscriptions", icon: ShoppingCart },
  { title: "Settings", href: "/admin/settings", icon: SettingsIcon },
];

const AdminSidebar: React.FC = () => {
  const { state } = useSidebar(); // Changed from 'collapsed' to 'state'
  const location = useLocation();
  const collapsed = state === 'collapsed'; // Derive collapsed boolean from state

  const getNavCls = (path: string) => {
    return cn(
      "flex items-center rounded-md px-3 py-2 text-sm font-medium transition-colors",
      location.pathname === path
        ? "bg-vkonfirm-primary text-primary-foreground hover:bg-vkonfirm-primary/90"
        : "text-foreground hover:bg-muted hover:text-accent-foreground",
      collapsed ? "justify-center" : ""
    );
  };

  return (
    <Sidebar
      className={cn(
        "border-r bg-card transition-all duration-300 ease-in-out",
        collapsed ? "w-16" : "w-64"
      )}
      collapsible="icon" // Changed from true to "icon"
    >
      <SidebarTrigger className="absolute top-3 right-3 lg:hidden" /> {/* Mobile trigger */}
      <SidebarContent className="flex flex-col">
        <nav className="flex-1 space-y-1 p-2">
          {navItems.map((item) => (
            <SidebarMenuItem key={item.title}>
              <SidebarMenuButton asChild>
                <NavLink to={item.href} className={getNavCls(item.href)}>
                  <item.icon className={cn("h-5 w-5", !collapsed && "mr-3")} />
                  {!collapsed && <span>{item.title}</span>}
                  {collapsed && <span className="sr-only">{item.title}</span>}
                </NavLink>
              </SidebarMenuButton>
            </SidebarMenuItem>
          ))}
        </nav>
      </SidebarContent>
    </Sidebar>
  );
};

export default AdminSidebar;
