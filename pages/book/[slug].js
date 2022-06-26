import { fetcher } from "../../lib/fetcher";

const Book = ({ book }) => {
  console.log(book);
  return <div>{book?.attributes?.title}</div>;
};

export default Book;


export async function getServerSideProps({ params }) {
  const { slug } = params;
  const booksResponse = await fetcher(
    `${process.env.NEXT_PUBLIC_STRAPI_URL}/books?filters[slug][$eq]=${slug}`
   
    );
    console.log("slug****************8******************",booksResponse);

  if (booksResponse.data.length===0) {
    return {
      notFound: true,
    }
  }
  // console.log();
  return {
    props: {
      book: booksResponse.data[0],
    },
  };
}
