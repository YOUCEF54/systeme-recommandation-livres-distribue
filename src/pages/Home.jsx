// src/pages/HomePage.jsx
import { Card, CardContent } from "@/components/ui/card";
import { useState } from "react";
import { cn } from "../lib/utils";

const books = [
  { title: "Book 1", cover: "../../public/Book1.jpg",author: "Author 1", description: "Description 1" },
  { title: "Book 2", cover: "../../public/Book2.jpg",author: "Author 2", description: "Description 2" },
  { title: "Book 3", cover: "../../public/Book3.jpg",author: "Author 3", description: "Description 3" },
  { title: "Book 4", cover: "../../public/Book4.jpg",author: "Author 4", description: "Description 4" },
  { title: "Book 5", cover: "../../public/Book5.jpg",author: "Author 5", description: "Description 5" },
  { title: "Book 6", cover: "../../public/Book6.jpg",author: "Author 6", description: "Description 6" },
  { title: "Book 7", cover: "../../public/Book7.jpg",author: "Author 7", description: "Description 7" },
  { title: "Book 8", cover: "../../public/Book8.jpg",author: "Author 8", description: "Description 8" },
  { title: "Book 9", cover: "../../public/Book9.jpg",author: "Author 9", description: "Description 9" },
  { title: "Book 10",cover: "../../public/Book10.jpg", author: "Author 10", description: "Description 10" },
  { title: "Book 11",cover: "../../public/Book11.jpg", author: "Author 11", description: "Description 11" },
  { title: "Book 12",cover: "../../public/Book12.jpg", author: "Author 12", description: "Description 12" },]

export default function HomePage() {
    const [isExpanded, setIsExpanded] = useState({state: false, index: null});
    const toggleExpand = (index) => {
        setIsExpanded({state: !isExpanded.state, index: index});
    };
  return (
    <div className="p-6 mt-20">
      <h2 className="text-xl font-semibold mb-4">Recommended Books</h2>
      <div className={cn(" gap-4 max-w-[60rem] mx-auto",
            isExpanded.state ? " w-full flex  items-center justify-center h-[80vh]" : "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4")}
        >
        {
            books.map((book, index) => (
                <Card 
                    onClick = {()=>toggleExpand(index)} key={index}
                    className={cn(`hover:scale-105 flex w-[100%] items-center transition-all cursor-pointer  duration-300   `,
                        `${isExpanded.state && isExpanded.index == index ? " absolute w-[60%]  z-50 transition duration-500   py-4  mx-auto flex items-center  justify-center" : ""}`,
                        `${isExpanded.state && isExpanded.index != index ? "blur " : ""}`)}>
                <CardContent className={cn("px-4 transition-all duration-300  w-full",
                    isExpanded.state && isExpanded.index == index ? "flex justify-between  gap-6  items-center " : ""
                )}>
                    <img src={book.cover} alt={book.title} 
                        className={cn("w-full  object-cover mb-2 rounded-md",
                        ``)
                         }/>
                  <div>
                    <h3 className="text-lg font-medium">{book.title}</h3>
                    <p className="text-sm text-gray-500">{book.author}</p>
                    <p className="text-sm text-gray-700 line-clamp-2">{book.description}</p>
                  </div>
                </CardContent>
                </Card>
            ))}
            {/* Example static card */}

      </div>
    </div>
  );
}
