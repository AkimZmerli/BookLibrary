import { useBooks } from "./lib/BookContext";

export function deleteBooks() {
  myLibrary.splice(0, myLibrary.length);
}
