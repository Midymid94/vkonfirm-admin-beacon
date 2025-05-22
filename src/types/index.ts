
export interface Company {
  id: string;
  logoUrl?: string;
  name: string;
  purchaseDate: string;
  planExpirationDate: string;
  purchaser: {
    fullName: string;
    email: string;
    contactNumber: string;
  };
  plan: {
    name: string;
    duration: string;
  };
  status: 'Active' | 'Expiring' | 'Expired';
}

export interface UserProfile {
  name: string;
  avatarUrl?: string;
  email: string;
}

// Add more types as needed
