
import { Navigate } from 'react-router-dom';

const Index = () => {
  // For a real app, this might be a login page or a public landing page.
  // For now, redirecting to the admin dashboard.
  return <Navigate to="/admin/dashboard" replace />;
};

export default Index;
