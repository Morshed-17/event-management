import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="text-center space-y-3">
        <h1 className="text-9xl font-bold">404</h1>
        <p className="max-w-[400px] mx-auto text-xl mb-4">
          Looks like you have entred the wrong adddress.
        </p>
        <Link to="/">
          <button className="text white bg-blue-600 font-bold text-lg py-2 px-4 rounded-lg text-white">
            Go back to home
          </button>
        </Link>
      </div>
    </div>
  );
};

export default ErrorPage;
