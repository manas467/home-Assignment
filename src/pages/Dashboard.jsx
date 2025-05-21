import { useEffect, useState } from 'react';
import DashboardTable from '@/components/DashboardTable';
import LoadingSkeleton from '@/components/LoadingSkeleton';

export default function Dashboard() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold text-blue-600">Dashboard</h1>
        <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded shadow-md transition">
          + Add User
        </button>
      </div>

      {loading ? <LoadingSkeleton/> : <DashboardTable />}
    </div>
  );
}
