import { fetcher } from "../../lib/fetcher";

const Book = ({ book }) => {
  console.log(book);
  return <div>{book?.attributes?.title}</div>;
};

export async function getServerSideProps({ params }) {
  const { slug } = params;
  console.log("slug", params);
  const bookResponse = await fetcher(
    `${process.env.NEXT_PUBLIC_STRAPI_URL}/books?filters[slug][$eq]=${slug}`
   
  );

  // console.log();
  return {
    props: {
      book: bookResponse.data[0],
    },
  };
}
export default Book;
