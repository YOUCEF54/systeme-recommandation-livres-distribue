// src/components/BookCard.jsx
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function BookCard({ title, author, description }) {
  return (
    <Card className="max-w-sm">
      <CardContent className="p-4">
        <h2 className="text-lg font-semibold">{title}</h2>
        <p className="text-muted-foreground mb-1">By {author}</p>
        <p className="text-sm line-clamp-3">{description}</p>
        <Button className="mt-4 w-full">View Details</Button>
      </CardContent>
    </Card>
  );
}
