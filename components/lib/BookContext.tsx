"use client";

import React, { createContext, useState, useContext, ReactNode } from "react";
import { Book } from "../book";

const initialBooks: Book[] = [
  new Book("Radikale Zärtlichkeit", "Seyda Kurt", 223, true),
  new Book("Polysecure", "Jessica Fern", 342, true),
  new Book("Hass ", "Seyda Kurt", 404, false),
];

interface BookContextType {
  books: Book[];
  addBook: (book: Book) => void;
  deleteBook: (title: string) => void;
}

const BookContext = createContext<BookContextType | undefined>(undefined);

export function BookProvider({ children }: { children: ReactNode }) {
  const [books, setBooks] = useState<Book[]>(initialBooks);

  const addBook = (book: Book) => {
    setBooks((prevBooks) => [...prevBooks, book]);
  };

  const deleteBook = (title: string) => {
    setBooks((prevBooks) => prevBooks.filter((book) => book.title !== title));
  };

  return (
    <BookContext.Provider value={{ books, addBook, deleteBook }}>
      {children}
    </BookContext.Provider>
  );
}

export function useBooks() {
  const context = useContext(BookContext);
  if (context === undefined) {
    throw new Error("useBooks must be used within a BookProvider");
  }
  return context;
}
