import DisplayLibrary from "../components/displayLibrary";
import { BookProvider } from "../components/book-context";

export default function Home() {
  return (
    <BookProvider>
      <DisplayLibrary />
    </BookProvider>
  );
}
