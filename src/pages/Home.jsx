import Nav from "../components/Nav.jsx";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Home.css";
import useAuth from "../hooks/useAuth.js";
import Login from "../components/Login.jsx";

function Home() {
  const { user, logout } = useAuth();

  console.log(user);

  if (!user) return <Login />;

  return (
    <div className="home">
      <header className="header">
        <div className="header__overlay"></div>
        <Nav />
        <div className="header__description">
          <h2 className="header__description--title">
            America's most awarded free film platform.
          </h2>
          <p className="header__description--subtitle">
            Find your favorite films.
          </p>
          <div className="search">
            <input
              type="text"
              className="search-bar"
              placeholder="Search by Title"
            />
          </div>
          <button className="header__input--search">
            {/* if loading, search icon, if not loading, spinner icon */}
          </button>
        </div>
        <button onClick={logout}>Logout</button>
      </header>
    </div>
  );
}
export default Home;
