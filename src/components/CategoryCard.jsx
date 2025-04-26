import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";

export default function CategoryCard({ label, selected, onClick }) {
  return (
    
    <Card
      onClick={onClick}
      className={cn(
        "  cursor-pointer transition-all hover:scale-105 p-2 px-0 rounded-md text-center w-fit h-fit text-nowrap ",
        selected ? "bg-primary text-white" : "bg-muted"
      )}
    >
      <CardContent className=" font-medium">{label}</CardContent>
    </Card>
  );
}
