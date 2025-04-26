// src/components/Navbar.jsx
import { Button } from "@/components/ui/button";

export default function Navbar() {
  return (
    <nav className="w-full fixed z-50 bg-white/75 backdrop-blur-lg top-0 flex items-center justify-between px-6 py-4 shadow-md  dark:bg-black">
      <h1 className="text-xl font-bold">📚 BookRecSys</h1>
      <div className="space-x-2">
        <Button variant="outline">Home</Button>
        <Button variant="outline">Recommendations</Button>
        <Button variant="default">Login</Button>
      </div>
    </nav>
  );
}
