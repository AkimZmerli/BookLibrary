"use client";

import React, { useState } from "react";
import { Book } from "../components/book";
import { useBooks } from "../components/lib/BookContext";

export function BookForm() {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [pages, setPages] = useState("");
  const [hasBeenRead, setHasBeenRead] = useState(false);

  const { addBook } = useBooks();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newBook = new Book(title, author, parseInt(pages), hasBeenRead);
    addBook(newBook);
    console.log("New book added:", newBook.presentation());

    // Reset form fields
    setTitle("");
    setAuthor("");
    setPages("");
    setHasBeenRead(false);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label
          htmlFor="title"
          className="block text-sm font-medium text-gray-700"
        >
          Title
        </label>
        <input
          type="text"
          id="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
        />
      </div>
      <div>
        <label
          htmlFor="author"
          className="block text-sm font-medium text-gray-700"
        >
          Author
        </label>
        <input
          type="text"
          id="author"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
          required
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
        />
      </div>
      <div>
        <label
          htmlFor="pages"
          className="block text-sm font-medium text-gray-700"
        >
          Pages
        </label>
        <input
          type="number"
          id="pages"
          value={pages}
          onChange={(e) => setPages(e.target.value)}
          required
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
        />
      </div>
      <div>
        <label className="flex items-center">
          <input
            type="checkbox"
            checked={hasBeenRead}
            onChange={(e) => setHasBeenRead(e.target.checked)}
            className="rounded border-gray-300 text-indigo-600 shadow-sm focus:border-indigo-300 focus:ring focus:ring-offset-0 focus:ring-indigo-200 focus:ring-opacity-50"
          />
          <span className="ml-2 text-sm text-gray-700">Has been read</span>
        </label>
      </div>
      <button
        type="submit"
        className="w-full py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
      >
        Add Book
      </button>
    </form>
  );
}
