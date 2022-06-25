// import React from 'react'
import Link from "next/link";
const BookList = ({ books }) => {
  console.log("booklist", books);
  return (
    <ul className="space-y-4 text-2xl font-bold mb-5">
      {books &&
        books.data.map((book) => (
          <Link href={"/book" + book.id}>
            <li className="border m-2 p-4 rounded-md bg-slate-100 cursor-pointer">
              <a>{book.attributes.name}</a>
            </li>
          </Link>
        ))}
    </ul>
  );
};

export default BookList;
