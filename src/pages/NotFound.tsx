import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div>
      <h2 className="page-title">page not found</h2>
      <p>
        <Link to="/">Return home</Link>
      </p>
    </div>
  );
};

export default NotFound;
