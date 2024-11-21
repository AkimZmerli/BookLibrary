"use client";

import { useBooks } from "./lib/BookContext";

export default function DisplayLibrary() {
  const { books, deleteBook } = useBooks();
  return (
    <div className="flex flex-col items-center justify-center ">
      <h1 className="text-2xl font-bold mb-4 mt-5">Book Library</h1>
      <div className="space-y-6 p-3">
        {books.map((book, index) => (
          <p
            key={index}
            className=" flex justify-between p-4 bg-slate-200 rounded shadow hover:bg-slate-400"
          >
            {book.presentation()}{" "}
            <button
              onClick={() => deleteBook(book.title)}
              className="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 rounded"
            >
              Delete
            </button>
          </p>
        ))}
      </div>
    </div>
  );
}
