
import React from 'react';
import CompanyCard from '@/components/admin/CompanyCard';
import { Company } from '@/types';
import { Button } from '@/components/ui/button';
import { PlusCircle, ListFilter, Search } from 'lucide-react';
import { Input } from '@/components/ui/input';

const mockCompanies: Company[] = [
  {
    id: '1',
    name: 'Innovatech Ltd.',
    logoUrl: 'https://via.placeholder.com/40/9b87f5/ffffff?text=IL',
    purchaseDate: '2024-01-15',
    planExpirationDate: '2025-01-15',
    purchaser: {
      fullName: 'Alice Wonderland',
      email: 'alice@innovatech.com',
      contactNumber: '+1-555-0101',
    },
    plan: {
      name: 'Premium Suite',
      duration: '1 Year',
    },
    status: 'Active',
  },
  {
    id: '2',
    name: 'Synergy Corp',
    logoUrl: 'https://via.placeholder.com/40/7E69AB/ffffff?text=SC',
    purchaseDate: '2023-11-20',
    planExpirationDate: '2024-11-20', // Expiring soon
    purchaser: {
      fullName: 'Bob The Builder',
      email: 'bob@synergy.io',
      contactNumber: '+1-555-0102',
    },
    plan: {
      name: 'Standard Business',
      duration: '1 Year',
    },
    status: 'Expiring',
  },
  {
    id: '3',
    name: 'Solutions Inc.',
    logoUrl: 'https://via.placeholder.com/40/6E59A5/ffffff?text=SI',
    purchaseDate: '2023-05-01',
    planExpirationDate: '2024-04-30', // Expired
    purchaser: {
      fullName: 'Charlie Brown',
      email: 'charlie@solutions.inc',
      contactNumber: '+1-555-0103',
    },
    plan: {
      name: 'Basic Tier',
      duration: '1 Year',
    },
    status: 'Expired',
  },
  {
    id: '4',
    name: 'Tech Wizards',
    logoUrl: 'https://via.placeholder.com/40/D6BCFA/000000?text=TW',
    purchaseDate: '2024-03-10',
    planExpirationDate: '2025-03-10',
    purchaser: {
      fullName: 'Diana Prince',
      email: 'diana@techwizards.dev',
      contactNumber: '+1-555-0104',
    },
    plan: {
      name: 'Enterprise Plus',
      duration: '1 Year',
    },
    status: 'Active',
  },
];

const CompaniesPage: React.FC = () => {
  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-2xl font-bold">Companies Management</h1>
          <p className="text-muted-foreground">Manage all registered companies and their details.</p>
        </div>
        <Button>
          <PlusCircle className="mr-2 h-4 w-4" /> Add New Company
        </Button>
      </div>

      <div className="flex flex-col sm:flex-row gap-4 items-center">
        <div className="relative w-full sm:flex-grow">
          <Input
            type="search"
            placeholder="Search companies by name or email..."
            className="w-full pl-10"
          />
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
        </div>
        <Button variant="outline">
          <ListFilter className="mr-2 h-4 w-4" /> Filters
        </Button>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {mockCompanies.map((company) => (
          <CompanyCard key={company.id} company={company} />
        ))}
      </div>
    </div>
  );
};

export default CompaniesPage;
