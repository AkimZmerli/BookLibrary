"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { SubmitHandler, useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Switch } from "@/components/ui/switch";
import * as z from "zod";
import { Book } from "../components/book";
import { useState } from "react";

const formSchema = z.object({
  Booktitle: z
    .string()
    .min(4, { message: "Book title must be at least 4 characters." }),
  Author: z
    .string()
    .min(3, { message: "The author has to have a longer name, bitch" }),
  Pages: z.number().lte(3, { message: "this👏is👏too👏big" }),
  didRead: z.boolean({
    required_error: "DID YOU READ IT OR NOT?!?!?",
  }),
});

export function SidebarForm() {
  const { handleSubmit, control, watch } = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      Booktitle: "",
      Author: "",
      Pages: 0,
      didRead: false,
    },
  });

  const [books, setBooks] = useState<Book[]>([]);

  const onSubmit: SubmitHandler<z.infer<typeof formSchema>> = (data) => {
    const newBook = new Book(
      data.Author,
      data.Booktitle,
      data.Pages,
      data.didRead
    );
    setBooks([...books, newBook]); // Add the new book to the books array
    console.log(newBook.presentation());
  };

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <form className="space-y-5">
        <FormField
          control={control}
          name="Booktitle"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input
                  placeholder="Book title"
                  {...field}
                  type="text"
                  value={watch("Booktitle")}
                />
              </FormControl>
            </FormItem>
          )}
        />
        <FormField
          control={control}
          name="Author"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input
                  placeholder="Author"
                  {...field}
                  type="text"
                  value={watch("Author")}
                />
              </FormControl>
            </FormItem>
          )}
        />
        <FormField
          control={control}
          name="Pages"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input
                  placeholder="Pages"
                  {...field}
                  type="number"
                  value={watch("Pages")}
                />
              </FormControl>
            </FormItem>
          )}
        />
        <div
          className="flex
         flex-col mb-4"
        >
          <Switch type="checkbox" id="didRead" name="didRead" />
          <Button type="submit">Submit</Button>
        </div>
      </form>
    </Form>
  );
}
