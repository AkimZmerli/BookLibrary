"use client";

import { createContext, useState } from "react";

export const BookContext = createContext<{ books: Book[] }>({ books: [] });

export function BookProvider({ children }: { children: React.ReactNode }) {
  const [books, setBooks] = useState<Book[]>([]);

  return (
    <BookContext.Provider value={{ books, setBooks }}>
      {children}
    </BookContext.Provider>
  );
}
