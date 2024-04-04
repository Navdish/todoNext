
import List from "@/components/List";
import ListSkeleton from "@/components/ListSkeleton";
import { Button } from "@mui/material";
import Link from "next/link";
import { Suspense } from "react";

export default function Home() {
  

  return (
    <>
      <h1>Home</h1>
      <Link href='/todo'>Go to Item</Link>
      <Suspense fallback={<ListSkeleton />}>
        <List/>
      </Suspense>
      {/* render the todo list with the tag 'todo' , fetch the list using the server action and render it in a component wrapped inside suspense */}
    </>
  );
}
