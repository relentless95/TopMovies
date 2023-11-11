import React from "react";
import Vote from "./Vote";
import { Link } from "react-router-dom";

const SingleCarouselItem = ({ data }) => {
  const BackgroundImageUrl = `linear-gradient(to bottom, rgba(0,0,0,0) 0%, rgba(0,0,0,1)100%), url("https://image.tmdb.org/t/p/original" +
    ${data.backdrop_path})`;
  return (
    <div
      className="singleCarouselItem"
      style={{ backgroundImage: BackgroundImageUrl }}
    >
      <div className="trending-align-css">
        {/* display1 = display  trending-data-container = trending-container*/}
        <div className="display trending-container">
          {/* left to align left  */}
          <div className="left">
            <img
              src={`https://image.tmdb.org/t/p/w500${data.poster_path}`}
              alt="poster"
            />
          </div>
          {/* to align right */}
          <div className="right">
            <div className="div">
              <h2>
                {data.original_title ? data.original_title : data.original_name}
              </h2>
              <p>{data.media_type}</p>
              {data.release_date ? (
                <p className="banner-release">
                  <strong>{data.release_date}</strong>
                </p>
              ) : (
                ""
              )}
              <Vote data={data.vote_average} />
              {data.spoken_languages > 0 ? (
                <p className="banner-spoken-language">
                  <strong>L</strong>
                  {data.spoken_languages[0].english_name}
                </p>
              ) : (
                ""
              )}
              {data.number_of_seasons ? (
                <p className="banner-spoken-language">
                  <strong>Seasons</strong> {data.number_of_seasons}
                </p>
              ) : (
                ""
              )}
              <p className="banner-overview">
                <strong>Overview</strong>
              </p>
              <p className="overview">{data.overview}</p>
            </div>
            <div>
              {data.production_companies ? (
                <a href={data.homepage} target="blank">
                  <FaArrowUpRightFromSquare className="home-page-redirect" />
                  {/* change that banner-btn-readmore */}
                </a>
              ) : (
                <Link
                  className="read-more-btn banner-btn-readmore"
                  to={`/movie/${data.id}`}
                >
                  {" "}
                  Read More
                </Link>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleCarouselItem;
