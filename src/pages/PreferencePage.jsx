import { useState } from "react";
import categories from "@/data/categories";
import CategoryCard from "@/components/CategoryCard";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import { cn } from "@/lib/utils";
import { Link } from "react-router-dom";


export default function PreferencePage() {
  const [selected, setSelected] = useState([]);

  const toggleCategory = (category) => {
    setSelected((prev) =>
      prev.includes(category)
        ? prev.filter((c) => c !== category)
        : [...prev, category]
    );
  };

  const handleSubmit = () => {
    if (selected.length === 0) {
      toast.error("Please select at least one category");
      return;
    }
    // TODO: Save to backend or localStorage, then navigate
    console.log("Selected categories:", selected);
    toast.success("Preferences saved!");
  };

  return (
    <div className="relative flex  w-full items-center justify-center bg-white dark:bg-black">
    <div
      className={cn(
        "absolute inset-0",
        "[background-size:30px_30px]",
        "[background-image:linear-gradient(to_right,#F6F6F7_1px,transparent_1px),linear-gradient(to_bottom,#F6F6F7_1px,transparent_1px)]",
        "dark:[background-image:linear-gradient(to_right,#262626_1px,transparent_1px),linear-gradient(to_bottom,#262626_1px,transparent_1px)]",
      )}
    />
    <div className="min-h-screen z-50 px-2 mt-26 py-2 max-w-xl mx-auto">
      <h1 className="text-2xl font-bold mb-6 text-center">
        Choose Your Favorite Book Categories 📚
      </h1>

      <div className="gridd gridd-cols-2 sm:gridd-cols-4 flex flex-wrap gap-4 mb-8">
        {categories.map((cat) => (
          <CategoryCard
            key={cat}
            label={cat}
            selected={selected.includes(cat)}
            onClick={() => toggleCategory(cat)}
          />
        ))}
      </div>

      <div className="text-center flex flex-col gap-4 ">
        <Link to={"/home"} onClick={handleSubmit} className="w-full cursor-pointer">
          Continue
        </Link>
        <Link to={"/home"}  onClick={handleSubmit} className="w-full hover:underline bg-white/75 backdrop-blur-lg text-muted-foreground hover:bg-transparent cursor-pointer drop-shadow-none">
          Skip
        </Link>
      </div>
    </div>
    </div>
  );
}
