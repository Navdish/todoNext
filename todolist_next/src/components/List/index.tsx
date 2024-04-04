import React, { useEffect, useState } from "react";

interface datatype {
  _id: string;
  content: string;
}

async function List() {
  var data:[datatype]|[] = [{_id: "", content:""}];
  async function getTodo() {
    try {
      const response = await fetch("http://localhost:3000/api/todo");
      const temp = await response.json();
      console.log(temp.list);
      data = temp.list;
    } catch (error) {
      console.log("error - ", error);
    }
  }
  await getTodo();
  return (
    <div>
      List
      <ul>
        {data?.map((d) => {
          return <li key={d._id}>{d?.content}</li>;
        })}
      </ul>
    </div>
  );
}

export default List;
