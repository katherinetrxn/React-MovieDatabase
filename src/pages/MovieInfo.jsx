import React from "react";
import Nav from "../components/Nav.jsx";
import "./MovieInfo.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

function MovieInfo() {
  return (
    <div>
      <div id="movies__body">
        <main id="movies__main">
          <div className="info__header">
            <div class="header__overlay"></div>
            <Nav />
            <div className="row">
              <div className="movie__selected--top">
                <Link to="/movies" className="movie__link">
                  <FontAwesomeIcon icon="arrow-left" />
                </Link>
                <Link to="/movies" className="movie__link">
                  <h2 className="movie__selected--title--top">Movies</h2>
                </Link>
              </div>
              <div className="info-container">
                <div className="movie__selected">
                  <figure className="movie__selected--figure">
                    {/* <img className="movie__selected--img" src={movie.url} alt="" /> */}
                  </figure>
                  <div className="movie__selected--description">
                    {/* <h2 className="movie__selected--title">{movie.title}</h2> */}
                    {/* <Ratings rating={movie.rating} /> */}
                    <div className="movie__summary">
                      <h3 className="movie__summary--title">Plot</h3>
                      <p className="movie__summary--para">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Veniam, repellendus modi odio porro, consequuntur,
                        asperiores minima sint voluptatem at reiciendis ducimus
                        neque provident alias iure nihil explicabo nobis id
                        voluptas.
                      </p>
                      <p className="movie__summary--para">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Veniam, repellendus modi odio porro, consequuntur,
                        asperiores minima sint voluptatem at reiciendis ducimus
                        neque provident alias iure nihil explicabo nobis id
                        voluptas.
                        {/* movie.desc */}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

export default MovieInfo;
