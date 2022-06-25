import { fetcher } from "../lib/fetcher";
import BookList from "../components/BookList";

const Books = ({ books }) => {
  return (
    <>
      <h1 className="text-4xl md:text-5xl font-bold leading-tighter mb-4">
        <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-teal-400 py-2">
          Books
        </span>
      </h1>
      {/* <pre> { JSON.stringify(books.data[0].attributes.name)}</pre> */}
      {/* <BooksList books={books}/> */}
      <BookList books={books} />
    </>
  );
};

export default Books;

export async function getServerSideProps() {
  const books = await fetcher(`${process.env.NEXT_PUBLIC_STRAPI_URL}/books`);

  console.log(books);
  return {
    props: {
      books,
    },
  };
}
