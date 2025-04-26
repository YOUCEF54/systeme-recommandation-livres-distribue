// src/components/SearchBar.jsx
import { Input } from "@/components/ui/input";

export default function SearchBar({ onSearch }) {
  return (
    <Input
      type="text"
      placeholder="Search books..."
      onChange={(e) => onSearch(e.target.value)}
      className="w-full max-w-md mb-4"
    />
  );
}
