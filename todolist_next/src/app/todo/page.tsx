import { Button } from "@mui/material";
import Image from "next/image";
import Link from "next/link";

export default function TodoList() {
  return (
    <>
      TodoList
      <Button><Link href='/item'>Go to Item</Link></Button>
    </>
  );
}
