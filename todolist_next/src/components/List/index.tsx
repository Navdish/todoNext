import React, { useEffect, useState } from "react";
import FormBox from "../Box";

interface datatype {
  _id: string;
  content: string;
  createdAt: string;
  updatedAt: string;
  __v: number;
}

async function List() {
  async function getTodo() {
    try {
      const response = await fetch("http://localhost:3000/api/todo", { next: { tags: ['todolist'] } });
      const temp = await response.json();
      return temp.list;
    } catch (error) {
      console.log("error - ", error);
    }
  }
  var data:[datatype]|[] = await getTodo();
  return (
    <div>
      <ul>
        {data?.map((d) => {
          return (
          <li key={d._id}>
            {d?.content}
            <FormBox id = {d._id} content ={d.content}/>
          </li>);
        })}
      </ul>
    </div>
  );
}

export default List;
