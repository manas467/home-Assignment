import { Link, useLocation } from 'react-router-dom';

const navItems = [
  { name: 'Dashboard', path: '/' },
  { name: 'Settings', path: '/settings' },
];

export default function SideBar() {
  const location = useLocation();

  return (
    <div className="w-64 bg-white border-r min-h-screen">
      <div className="p-4 font-bold text-lg border-b">My Dashboard</div>
      <nav className="p-4 space-y-2">
        {navItems.map((item) => (
          <Link
            key={item.path}
            to={item.path}
            className={`block px-4 py-2 rounded ${
              location.pathname === item.path
                ? 'bg-blue-500 text-white'
                : 'hover:bg-gray-100'
            }`}
          >
            {item.name}
          </Link>
        ))}
      </nav>
    </div>
  );
}