import React from "react";
// import Link from "next/link";
import Link from "next/link";


const NotFound = () => {
  return (
    <div class="  min-h-full flex items-center justify-center">
      <div class="bg-white shadow overflow-hidden sm:rounded-lg pb-8">
        <div class="border-t border-gray-200 text-center pt-8">
          <h1 class="text-9xl font-bold text-purple-400">404</h1>
          <h1 class="text-6xl font-medium py-8">oops! Page not found</h1>
          {/* <p class="text-2xl pb-8 px-12 font-medium">
            Oops! The page you are looking for does not exist. It might have
            been moved or deleted.
          </p> */}
          <Link href="/" >
           <a class="bg-gradient-to-r from-blue-400 to-teal-500 hover:from-pink-500 hover:to-orange-500 text-white font-semibold px-6 py-3 rounded-md mr-6"> HOME</a>
          </Link>
          {/* <button class="bg-gradient-to-r from-red-400 to-red-500 hover:from-red-500 hover:to-red-500 text-white font-semibold px-6 py-3 rounded-md">
            Contact Us
          </button> */}
        </div>
      </div>
    </div>
  );
};

export default NotFound;
