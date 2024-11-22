import { BookForm } from "./BookForm";

export default function Sidebar() {
  return (
    <div className="max-h-screen bg-amber-300 s py-6 flex flex-col justify-center sm:py-12">
      <div className="relative py-3 sm:max-w-xl sm:mx-auto">
        <div className="relative px-4 py-10 bg-zinc-300  shadow-lg sm:rounded-3xl sm:p-20">
          <div className="max-w-md mx-auto">
            <h1 className="text-2xl font-semibold mb-6 text-zinc-750">
              Book a New Book
            </h1>
            <BookForm />
          </div>
        </div>
      </div>
    </div>
  );
}
