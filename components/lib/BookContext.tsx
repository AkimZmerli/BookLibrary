"use client";

import React, { createContext, useState, useContext, ReactNode } from "react";
import { Book } from "../book";

const initialBooks: Book[] = [
  new Book("Radikale Zärtlichkeit", "Seyda Kurt", 223, true),
  new Book("Polysecure", "Jessica Fern", 342, true),
  new Book(
    "Hass - Annäherung an ein widerspenstiges Gefühl",
    "Seyda Kurt",
    404,
    false
  ),
];

interface BookContextType {
  books: Book[];
  addBook: (book: Book) => void;
}

const BookContext = createContext<BookContextType | undefined>(undefined);

export function BookProvider({ children }: { children: ReactNode }) {
  const [books, setBooks] = useState<Book[]>(initialBooks);

  const addBook = (book: Book) => {
    setBooks((prevBooks) => [...prevBooks, book]);
  };

  return (
    <BookContext.Provider value={{ books, addBook }}>
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
