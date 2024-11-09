export class Book {
  author: string;
  title: string;
  pages: number;
  didRead: boolean;

  constructor(author: string, title: string, pages: number, didRead: boolean) {
    this.author = author;
    this.title = title;
    this.pages = pages;
    this.didRead = didRead;
  }
  presentation() {
    if (this.pages > 300) {
      console.log(`${this.title} is a long book.`);
    }
    return (
      "Hello fellow book club. Today we have a book from " +
      this.author +
      " called " +
      this.title +
      " with " +
      this.pages +
      " many pages and I have read it which is " +
      this.didRead
    );
  }
}