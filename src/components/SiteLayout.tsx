import { Link, NavLink, Outlet, useLocation, useNavigate } from "react-router-dom";

const navigation = [
  { label: "projects", to: "/projects" },
  { label: "experience", to: "/experience" },
  { label: "about", to: "/about" },
  { label: "awards", to: "/awards" },
  { label: "contact", to: "/contact" },
];

export const SiteLayout = () => {
  const location = useLocation();
  const navigate = useNavigate();

  return (
    <div className="site-layout">
      <header className="site-header">
        <h1 className="m-0 font-normal">
          <Link className="site-name" to="/">
            Yorke
          </Link>
        </h1>
        <nav className="site-nav" aria-label="Main navigation">
          {navigation.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              onClick={(event) => {
                if (location.pathname === item.to) {
                  event.preventDefault();
                  navigate("/");
                }
              }}
            >
              {item.label}
            </NavLink>
          ))}
        </nav>
      </header>
      <main className="site-main">
        <Outlet />
      </main>
    </div>
  );
};
