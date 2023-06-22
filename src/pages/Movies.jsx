import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Movies.css";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import { Waveform } from "@uiball/loaders";

function Movies() {
  const [sliderValue, setSliderValue] = useState("");
  const [filterOn, setFilterOn] = useState(false);
  const [releaseDateValue, setReleaseDate] = useState("");
  const [searchInputValue, setSearchInputValue] = useState("");
  const [loading, setLoading] = useState(true);
  const [moviesData, setMoviesData] = useState([]);
  const [moviesCTA, setMoviesCTA] = useState(true);

  function toggleYearFilter(event) {
    const checked = event.target.checked;
    setFilterOn(checked);
  }

  function sliderChange(event) {
    setSliderValue(event.target.value);
    fetchMovies();
  }

  useEffect(() => {
    setMoviesCTA(false);
    fetchMovies();
    if (filterOn) {
      setReleaseDate(`Release Year: <b className="blue">${sliderValue}</b>`);
    }
  }, [filterOn, searchInputValue, sliderValue]);

  // useEffect(() => {

  // }, []);

  const fetchMovies = async () => {
    if (!searchInputValue) return;

    setLoading(true);

    let filterString = "";
    if (filterOn) {
      filterString = `&y=${sliderValue}`; // add year filter to search query
    }

    const url = `https://www.omdbapi.com/?i=tt3896198&apikey=74514e3b&s="${searchInputValue}"${filterString}`;
    const response = await axios.get(url);
    const moviesData = response.data;

    if (!moviesData.Search) {
      setMoviesData([]);
      return;
    }

    let filteredMovies =
      filterOn && searchInputValue
        ? moviesData.Search.filter((movie) => movie.Year === sliderValue)
        : moviesData.Search;

    setMoviesData(filteredMovies.slice(0, 6));
    setLoading(false);
  };

  return (
    <div>
      <body>
        <div className="header">
          <div className="header__overlay"></div>
          <div className="navigation">
            <figure className="logo">
              <i className="fa-solid fa-photo-film"></i>
              <Link to="/movies" className="movie__link">
                <h1 className="logo__name">cinema</h1>
              </Link>
            </figure>
            <ul className="nav__links">
              <li className="nav__link">
                <a className="nav__link--anchor link__hover-effect" href="">
                  Home
                </a>
              </li>
              <li className="nav__link">
                <a className="nav__link--anchor link__hover-effect" href="">
                  Latest
                </a>
              </li>
              <li className="nav__link">
                <a className="btn nav__link--anchor" href="">
                  Contact
                </a>
              </li>
            </ul>
          </div>
          <h1 className="header__title">Browse Our Films</h1>
          <div className="search">
            <input
              value={searchInputValue}
              onChange={(event) => setSearchInputValue(event.target.value)}
              className="search-bar"
              placeholder="Search by Title"
              type="text"
            />
            <i className="fas fa-search"></i>
          </div>
        </div>
        <main>
          <div className="container">
            <div className="row">
              <div className="main__result">
                <h2 className="search__result">
                  Search results {searchInputValue && `for ${searchInputValue}`}
                </h2>
                <div className="main__year">
                  <h2 id="main__year--label">
                    Release Year:{" "}
                    {filterOn ? (
                      <b className="blue">{sliderValue}</b>
                    ) : (
                      <b className="blue">N/A</b>
                    )}
                  </h2>
                  <input
                    type="range"
                    min="1900"
                    max="2023"
                    id="range"
                    className="slider"
                    onChange={sliderChange}
                    onKeyPress={(event) => event.key === "Enter"}
                  />
                  <label className="toggle">
                    <input
                      type="checkbox"
                      unchecked="false"
                      checked={filterOn}
                      className="toggle-input"
                      onClick={(event) => toggleYearFilter(event)}
                    />
                    <span className="toggle__slider"></span>
                    <span className="toggle__text">
                      {filterOn ? "ON" : "OFF"}
                    </span>
                  </label>
                </div>
              </div>
              <div className="movies">
                {moviesCTA && (
                  <div className="movies__cta">
                    <h1 className="movies__cta--title">
                      Search for your new favorite films today.
                    </h1>
                  </div>
                )}
                {loading && (
                  <div className="spinner__wrapper">
                    <div className="movies__loading--spinner">
                      <FontAwesomeIcon
                        icon={faSpinner}
                        className="fas fa-spinner movies__loading--spinner"
                      />
                    </div>
                  </div>
                )}
                {!loading && moviesData.length === 0 && (
                  <div className="reset">
                    <h1 className="reset__title">
                      Could not find any matches related to your search.
                    </h1>
                    <h2 className="reset__desc">
                      Please change the filter or reset it below.
                    </h2>
                    <Link to="/movies" className="movie__link">
                      <button className="reset__btn">Reset Filter</button>
                    </Link>
                  </div>
                )}
                {loading ? (
                  <div>
                    <Waveform
                      size={40}
                      lineWeight={3.5}
                      speed={1}
                      color="black"
                    />
                  </div>
                ) : (
                  <>
                    {moviesData.length > 0 && (
                      <div className="movies">
                        {moviesData.map((movie) => (
                          <div className="movie-wrapper" key={movie.imdbID}>
                            <div className="movie">
                              <figure className="movie__img">
                                <div className="movie__img--overlay">
                                  <p>
                                    More info
                                    <i className="fa-solid fa-arrow-right"></i>
                                  </p>
                                </div>
                                <img
                                  className="figure__img"
                                  src={movie.Poster}
                                  alt=""
                                />
                              </figure>
                              <h2 className="movie__title">{movie.Title}</h2>
                              <p className="movie__year">{movie.Year}</p>
                            </div>
                          </div>
                        ))}
                      </div>
                    )}
                  </>
                )}
              </div>
            </div>
          </div>
        </main>
      </body>
    </div>
  );
}

export default Movies;
