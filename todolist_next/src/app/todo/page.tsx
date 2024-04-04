import FormDialog from "@/components/Dialog";
import List from "@/components/List";
import ListSkeleton from "@/components/ListSkeleton"; 
import Link from "next/link";
import { Suspense } from "react";

export default function TodoList() {
  return (
    <>
      TodoList
      <Link href='/item'>Go to Item</Link>
      <Suspense fallback={<ListSkeleton />}>
        <FormDialog/>
        <List/>
      </Suspense>
    </>
  );
}
