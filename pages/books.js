import { fetcher } from "../lib/fetcher";
import BookList from "../components/BookList";
import useSWR from "swr";
import { useState } from "react";
import { Pagination } from "@mui/material";
// import { useRouter } from 'next/router'

const Books = ({ books }) => {
  const [pageIndex,setPageIndex]=useState(1)
  const { data } = useSWR(
    `${process.env.NEXT_PUBLIC_STRAPI_URL}/books?pagination[page]=${pageIndex}&pagination[pageSize]=2`,
    fetcher,
    { fallbackdata: books } //initial data is books got w/ SSR
  ); 
  console.log(books);
  // const router = useRouter(); 
  function handlePaginationChange(e, value) {
    setPageIndex(value);
    // router.push(`pagination/?page=${value}`, undefined, { shallow: true });
  }
  return (
    <>
      <h1 className="text-4xl md:text-5xl font-bold leading-tighter mb-4">
        <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-teal-400 py-2">
          Books
        </span>
      </h1>
     

      <BookList books={data} />
      <Pagination
        count={books.meta.pagination.pageCount}
        variant='outlined'
        color='primary'
        className='pagination'
        page={pageIndex}
        onChange={handlePaginationChange}
      />
    </>
  );
};

export default Books;

export async function getServerSideProps() {
  const books = await fetcher(`${process.env.NEXT_PUBLIC_STRAPI_URL}/books?pagination[page]=1&pagination[pageSize]=2`);

  console.log(books);
  return {
    props: {
      books,
    },
  };
}
