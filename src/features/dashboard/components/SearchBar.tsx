import { Input } from "@/shared/components/ui/input";
import { FaSearch } from "react-icons/fa";

interface SearchBarProps {
  searchQuery: string;
  onSearchChange: (value: string) => void;
}

export const SearchBar = ({ searchQuery, onSearchChange }: SearchBarProps) => {
  return (
    <div className="relative w-96">
      <FaSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500" />
      <Input
        type="text"
        placeholder="Search quizzes..."
        className="pl-10 bg-[#1a1a1a] border-gray-800 text-white placeholder:text-gray-500"
        value={searchQuery}
        onChange={(e) => onSearchChange(e.target.value)}
      />
    </div>
  );
};
