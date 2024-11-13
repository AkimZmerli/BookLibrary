export class Book {
  Author: string;
  Booktitle: string;
  Pages: number;
  didRead: boolean;

  constructor(
    Author: string,
    Booktitle: string,
    Pages: number,
    didRead: boolean
  ) {
    this.Author = Author;
    this.Booktitle = Booktitle;
    this.Pages = Pages;
    this.didRead = didRead;
  }
  presentation() {
    if (this.Pages > 300) {
      console.log(`${this.Booktitle} is a long book.`);
    }
    return (
      "Hello fellow book club. Today we have a book from " +
      this.Author +
      " called " +
      this.Booktitle +
      " with " +
      this.Pages +
      " many pages and I have read it which is " +
      this.didRead
    );
  }
}
