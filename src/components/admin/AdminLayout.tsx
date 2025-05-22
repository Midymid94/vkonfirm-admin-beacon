
import React from 'react';
import { Outlet } from 'react-router-dom';
import { SidebarProvider } from "@/components/ui/sidebar";
import AdminHeader from './AdminHeader';
import AdminSidebar from './AdminSidebar';
import { UserProfile } from '@/types';

// Mock user data
const mockUser: UserProfile = {
  name: "Admin User",
  email: "admin@vkonfirm.com",
  avatarUrl: "https://github.com/shadcn.png" // Placeholder avatar
};

const AdminLayout: React.FC = () => {
  return (
    <SidebarProvider> {/* Removed collapsedWidth prop */}
      <div className="flex min-h-screen w-full flex-col bg-background">
        <AdminHeader user={mockUser} />
        <div className="flex flex-1">
          <AdminSidebar />
          <main className="flex-1 p-4 sm:p-6 lg:p-8 overflow-auto">
            <Outlet />
          </main>
        </div>
      </div>
    </SidebarProvider>
  );
};

export default AdminLayout;
