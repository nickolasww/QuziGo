import { FaBookOpen, FaSignOutAlt } from "react-icons/fa";

interface SidebarProps {
  onLogout: () => void;
}

export const Sidebar = ({ onLogout }: SidebarProps) => {
  return (
    <aside className="w-64 bg-[#1a1a1a] border-r border-gray-800">
      <div className="p-6">
        <h1 className="text-2xl font-bold text-purple-500">Quizzy</h1>
      </div>

      <nav className="mt-6">
        <a
          href="#"
          className="flex items-center gap-3 px-6 py-3 bg-purple-600 text-white"
        >
          <FaBookOpen className="text-xl" />
          <span className="font-medium">Quizzes</span>
        </a>
      </nav>

      <div className="absolute bottom-0 w-64 border-t border-gray-800">
        <button
          onClick={onLogout}
          className="flex items-center gap-3 px-6 py-4 text-gray-400 hover:bg-gray-800 hover:text-white transition-colors w-full"
        >
          <FaSignOutAlt className="text-xl" />
          <span className="font-medium">Logout</span>
        </button>
      </div>
    </aside>
  );
};
