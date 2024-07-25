import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

function Missing() {
  const navigate = useNavigate();

  useEffect(() => {
    navigate("/");
  }, []);

  return (
    <div className="flex h-full flex-col items-center justify-center text-white xs:text-3xl md:text-8xl">
      <h1 className="mb-6">Redirecting...</h1>
      <Link to="/" className="z-10 text-purple-400 underline">
        Home Page
      </Link>
    </div>
  );
}

export default Missing;
