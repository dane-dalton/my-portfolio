import { Link } from "react-router-dom";

function Missing() {
  return (
    <div className="flex h-full flex-col items-center justify-center text-white xs:text-3xl md:text-8xl">
      <h1 className="mb-6">404 Page Not Found...</h1>
      <Link to="/" className="underline">
        Home Page
      </Link>
    </div>
  );
}

export default Missing;
