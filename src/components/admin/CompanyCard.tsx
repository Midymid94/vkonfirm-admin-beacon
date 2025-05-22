
import React from 'react';
import { Company } from '@/types';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { CalendarDays, User, Clock, MoreVertical } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

interface CompanyCardProps {
  company: Company;
}

const CompanyCard: React.FC<CompanyCardProps> = ({ company }) => {
  const getStatusClass = (status: Company['status']) => {
    switch (status) {
      case 'Active':
        return 'bg-vkonfirm-accent-green hover:bg-vkonfirm-accent-green/90';
      case 'Expiring':
        return 'bg-vkonfirm-accent-yellow hover:bg-vkonfirm-accent-yellow/90 text-black';
      case 'Expired':
        return 'bg-vkonfirm-accent-red hover:bg-vkonfirm-accent-red/90';
      default:
        return 'bg-gray-500';
    }
  };

  return (
    <Card className="flex flex-col">
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <div className="flex items-center space-x-3">
          <Avatar>
            <AvatarImage src={company.logoUrl} alt={company.name} />
            <AvatarFallback>{company.name.substring(0, 2).toUpperCase()}</AvatarFallback>
          </Avatar>
          <CardTitle className="text-lg font-semibold">{company.name}</CardTitle>
        </div>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" size="icon" className="h-8 w-8">
              <MoreVertical className="h-4 w-4" />
              <span className="sr-only">More options</span>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuItem>View Details</DropdownMenuItem>
            <DropdownMenuItem>Edit</DropdownMenuItem>
            <DropdownMenuItem className="text-red-600">Delete</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </CardHeader>
      <CardContent className="flex-grow space-y-3 text-sm text-muted-foreground">
        <div className="flex items-center">
          <User className="mr-2 h-4 w-4" />
          <span>{company.purchaser.fullName} ({company.purchaser.email})</span>
        </div>
        <div className="flex items-center">
          <CalendarDays className="mr-2 h-4 w-4" />
          <span>Purchased: {company.purchaseDate}</span>
        </div>
        <div className="flex items-center">
          <Clock className="mr-2 h-4 w-4" />
          <span>Expires: {company.planExpirationDate}</span>
        </div>
        <div>
          <span className="font-medium text-foreground">Plan:</span> {company.plan.name} ({company.plan.duration})
        </div>
      </CardContent>
      <CardFooter className="flex justify-between items-center pt-4">
        <Badge className={getStatusClass(company.status)}>{company.status}</Badge>
        <Button variant="outline" size="sm">View Details</Button>
      </CardFooter>
    </Card>
  );
};

export default CompanyCard;
