"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";

import * as z from "zod";

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
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      Booktitle: "",
      Author: "",
      Pages: 0,
      didRead: false,
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.

    console.log(values);
  }
  return (
    <Form
      resolver={zodResolver(formSchema)}
      defaultValues={{
        Booktitle: "",
        Author: "",
        Pages: 0,
        didRead: false,
      }}
      onSubmit={(values) => console.log(values)}
    >
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="Book title"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Username</FormLabel>
              <FormControl>
                <Input placeholder="shadcn" {...field} />
              </FormControl>
              <FormDescription>
                This is your public display name.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit">Submit</Button>
      </form>
    </Form>
  );
}
