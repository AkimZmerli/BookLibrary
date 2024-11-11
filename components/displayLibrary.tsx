"use client";

import { books } from "../components/lib/bookdata";

export default function DisplayLibrary() {
  return (
    <div className="flex flex-col items-center justify-center ">
      <h1 className="text-2xl font-bold mb-4 mt-5">Book Library</h1>
      <div className="space-y-6 p-3">
        {books.map((book, index) => (
          <p
            key={index}
            className="p-4 bg-slate-200 rounded shadow hover:bg-slate-400"
          >
            {book.presentation()}
          </p>
        ))}
      </div>
    </div>
  );
}
