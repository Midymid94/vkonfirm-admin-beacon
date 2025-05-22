
import React from 'react';
import CompanyCard from '@/components/admin/CompanyCard';
import { Company } from '@/types';
import { Button } from '@/components/ui/button';
import { PlusCircle, Filter, ArrowDownUp } from 'lucide-react';

const mockCompanies: Company[] = [
  {
    id: '1',
    name: 'Innovatech Solutions',
    logoUrl: 'https://via.placeholder.com/40/007bff/ffffff?text=IS',
    purchaseDate: '2024-01-15',
    planExpirationDate: '2025-01-15',
    purchaser: { fullName: 'Alice Johnson', email: 'alice@innovatech.com', contactNumber: '555-0101' },
    plan: { name: 'Pro', duration: '1 Year' },
    status: 'Active',
  },
  {
    id: '2',
    name: 'Synergy Corp',
    logoUrl: 'https://via.placeholder.com/40/28a745/ffffff?text=SC',
    purchaseDate: '2023-11-20',
    planExpirationDate: '2024-06-10', // Expiring soon
    purchaser: { fullName: 'Bob Williams', email: 'bob@synergy.com', contactNumber: '555-0102' },
    plan: { name: 'Enterprise', duration: '6 Months' },
    status: 'Expiring',
  },
  {
    id: '3',
    name: 'Apex Industries',
    logoUrl: 'https://via.placeholder.com/40/ffc107/000000?text=AI',
    purchaseDate: '2023-05-01',
    planExpirationDate: '2024-05-01',
    purchaser: { fullName: 'Carol Davis', email: 'carol@apex.com', contactNumber: '555-0103' },
    plan: { name: 'Basic', duration: '1 Year' },
    status: 'Expired',
  },
    {
    id: '4',
    name: 'Quantum Leap Inc.',
    logoUrl: 'https://via.placeholder.com/40/6f42c1/ffffff?text=QL',
    purchaseDate: '2024-03-01',
    planExpirationDate: '2025-03-01',
    purchaser: { fullName: 'David Brown', email: 'david@quantum.com', contactNumber: '555-0104' },
    plan: { name: 'Premium', duration: '1 Year' },
    status: 'Active',
  },
];

const DashboardPage: React.FC = () => {
  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h2 className="text-2xl font-bold tracking-tight">Dashboard Overview</h2>
          <p className="text-muted-foreground">
            Manage companies, users, and subscriptions.
          </p>
        </div>
        <div className="flex items-center gap-2">
            <Button variant="outline">
                <Filter className="mr-2 h-4 w-4" /> Filter
            </Button>
            <Button variant="outline">
                <ArrowDownUp className="mr-2 h-4 w-4" /> Sort
            </Button>
            <Button className="bg-vkonfirm-primary hover:bg-vkonfirm-primary/90 text-primary-foreground">
                <PlusCircle className="mr-2 h-4 w-4" /> Add Company
            </Button>
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {mockCompanies.map((company) => (
          <CompanyCard key={company.id} company={company} />
        ))}
      </div>
    </div>
  );
};

export default DashboardPage;
