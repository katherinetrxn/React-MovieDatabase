import Nav from "../components/Nav.jsx";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import './Home.css'

function Home() {
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
      </header>
    </div>
  );
}
export default Home;
