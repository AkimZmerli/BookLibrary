"use client";

import { books } from "../components/lib/bookdata";

export default function DisplayLibrary() {
  return (
    <div className="flex flex-col items-center justify-center">
      <h1 className="text-2xl font-bold mb-6">Book Library</h1>
      <div className="space-y-4">
        {books.map((book, index) => (
          <p key={index} className="p-4 bg-white rounded shadow">
            {book.presentation()}
          </p>
        ))}
      </div>
    </div>
  );
}
