import { Book } from "../book";

export const books: Book[] = [
  new Book("Radikale Zärtlichkeit", "Seyda Kurt", 223, true),
  new Book("Polysecure", "Jessica Fern", 342, true),
  new Book(
    "Hass - Annäherung an ein widerspenstiges Gefühl",
    "Seyda Kurt",
    404,
    false
  ),
];

export function addBook(newBook: Book): Book[] {
  books.push(newBook);
  return books;
}
