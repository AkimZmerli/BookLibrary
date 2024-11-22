"use client";

import { useBooks } from "./lib/BookContext";

export default function DisplayLibrary() {
  const { books, deleteBook } = useBooks();
  return (
    <div className="flex flex-col items-center justify-center ">
      <h1 className="text-xl text-bold mb-1 mt-7 font-serif pb-4">
        Hand Picked Selection
      </h1>
      <div className="space-y-9 p-6">
        {books.map((book, index) => (
          <p
            key={index}
            className=" flex justify-between font-serif p-6 bg-slate-300 rounded shadow "
          >
            {book.presentation()}{" "}
            <button
              onClick={() => deleteBook(book.title)}
              className="bg-sky-400 hover:bg-sky-500 font-mono text-white font-bold mx-2 py-1 px-2 rounded-lg"
            >
              x
            </button>
          </p>
        ))}
      </div>
    </div>
  );
}
