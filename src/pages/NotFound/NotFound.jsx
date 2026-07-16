import { Link } from "react-router";

const NotFound = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-center px-4">
      <h1 className="text-7xl font-bold text-red-500">404</h1>

      <h2 className="text-3xl font-semibold mt-4">
        Page Not Found
      </h2>

      <Link
        to="/"
        className="bg-black text-white px-6 py-3 rounded-lg hover:bg-gray-800"
      >
        Back to Home
      </Link>
    </div>
  );
};

export default NotFound;