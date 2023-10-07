import { Link } from "react-router-dom";

function Missing() {
  return (
    <div className="flex h-full w-full flex-col items-center justify-evenly">
      <h1 className="m-10 text-purple-400">404 Page Not Found</h1>
      <Link to="/" className="text-yellow-200 underline">
        Home Page
      </Link>
    </div>
  );
}

export default Missing;
