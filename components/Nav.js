import Link from "next/link";

const Nav = () => {
  return (
    <nav className="flex flex-wrap items-center justify-between w-full py-4 md:py-0 px-4 text-lg text-gray-700 bg-white">
      <div>
        <Link href="/">
          <a>
            <img
              className="n-3"
              src="/vercel.svg"
              width={200}
              height={50}
              alt="readsbook"
            />
          </a>
        </Link>
      </div>
      <ul className="pt-4 text-base text-gray-700 md:flex md:justify-between md:pt-0 space-x-2">
        <li>
          <Link href="/">
            <a className="md:p-2 py-2 block hover:text-purple-400">Home</a>
          </Link>
        </li>
        <li>
          <Link href="/books">
            <a className="md:p-2 py-2 block hover:text-purple-400">Books</a>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
