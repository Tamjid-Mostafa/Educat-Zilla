import React from "react";

const Blogs = () => {
  return (
    <div className="grid lg:grid-cols-2 2xl:grid-cols-3 grid-cols-1 gap-40 max-h-190">
      <div className="p-5 pb-10 ">
        <h1 className="font-extrabold text-6xl mt-10 mb-10 dark:text-white text-gray-800">
          01.
        </h1>
        <h1 className="text-2xl font-semibold text-gray-800 mt-4">
          What is the purpose of React Router?
        </h1>
        <p className="text-xl text-gray-400 mt-2 leading-relaxed">
          ReactJS Router is mainly used for developing Single Page Web
          Applications. React Router is used to define multiple routes in the
          application. When a user types a specific URL into the browser, and if
          this URL path matches any 'route' inside the router file, the user
          will be redirected to that particular route.
        </p>
      </div>
      <div className="p-5 pb-10">
        <h1 className="font-extrabold text-6xl mt-10 mb-10 dark:text-white text-gray-800">
          02.
        </h1>
        <h1 className="text-2xl font-semibold text-gray-800 mt-4">
          How does Context API works?
        </h1>
        <p className="text-xl text-gray-400 mt-2 leading-relaxed">
        React's context allows us to share information to any component, by storing it in a central place and allowing access to any component that requests it.

        </p>
      </div>
      <div className="p-5 pb-10">
        <h1 className="font-extrabold text-6xl mt-10 mb-10 dark:text-white text-gray-800">
          03.
        </h1>
        <h1 className="text-2xl font-semibold text-gray-800 mt-4">
          Why use useRef Hook?
        </h1>
        <p className="text-xl text-gray-400 mt-2 leading-relaxed">
          The useRef Hook allows you to persist values between renders. It can
          be used to store a mutable value that does not cause a re-render when
          updated. It can be used to access a DOM element directly.
        </p>
      </div>
    </div>
  );
};

export default Blogs;
