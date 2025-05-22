
import React from 'react';
import { SidebarTrigger } from "@/components/ui/sidebar";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Bell, Search } from "lucide-react"; // Removed unused Settings import
import { UserProfile } from '@/types';

interface AdminHeaderProps {
  user: UserProfile;
}

const AdminHeader: React.FC<AdminHeaderProps> = ({ user }) => {
  return (
    <header className="sticky top-0 z-30 flex h-16 items-center justify-between border-b bg-vkonfirm-header-bg px-4 sm:px-6 text-white">
      <div className="flex items-center gap-4">
        <SidebarTrigger className="lg:hidden text-white hover:text-vkonfirm-secondary" />
        <h1 className="text-xl font-bold">VKONFIRM</h1>
      </div>

      <div className="flex flex-1 items-center justify-end gap-4">
        <div className="relative w-full max-w-xs hidden sm:block">
          <Input
            type="search"
            placeholder="Search Vehicles" // Updated placeholder
            className="w-full bg-vkonfirm-search-bg border-vkonfirm-search-border text-white placeholder:text-slate-300 pl-10 focus:ring-vkonfirm-primary" // Updated classes
          />
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
        </div>
        <Button variant="ghost" size="icon" className="rounded-full text-white hover:bg-vkonfirm-search-bg hover:text-vkonfirm-secondary"> {/* Matched hover with search input bg */}
          <Bell className="h-5 w-5" />
          <span className="sr-only">Notifications</span>
        </Button>
        <Avatar className="h-9 w-9">
          <AvatarImage src={user.avatarUrl} alt={user.name} />
          <AvatarFallback>{user.name.charAt(0)}</AvatarFallback>
        </Avatar>
      </div>
    </header>
  );
};

export default AdminHeader;
