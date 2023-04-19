import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link } from "react-router-dom";

const Post = React.forwardRef(({ post }, ref) => {
  const postBody = (
    <>
      {/* <h2>{post.title}</h2> */}
      {/* <p>{post.body}</p> */}
      {/* to get the movie id */}
      {/* <p>Post ID: {post.id}</p> */}
      {console.log("poster path is:", post.poster_path, post.title)}
      {post.poster_path == null ? (
        <Link to={`/movie/${post.id}`}>
          <img
            src={"/images/placeholder-image.jpg"}
            alt="placeholder"
            className="card-image"
          />
        </Link>
      ) : (
        <Link to={`/movie/${post.id}`}>
          <img
            src={`https://image.tmdb.org/t/p/original${post.poster_path}`}
            alt="image"
            className="card-image"
            // style={{ height: "400px", width: "300px" }}
          />
        </Link>
      )}

      {/* <img
        src={`https://image.tmdb.org/t/p/original${post.poster_path}`}
        alt="image"
        className="card-image"
        // style={{ height: "400px", width: "300px" }}
      /> */}
      <div className="card-content">
        <p>{post.title}</p>
        <p>language:{post.original_language}</p>
        <div className="card-info">
          <div>
            <FontAwesomeIcon icon={faStar} />
            score:{post.vote_average}
          </div>
          <div>release date:{post.release_date}</div>
        </div>
      </div>
    </>
  );

  const content = ref ? (
    <div ref={ref} className="card">
      {postBody}
    </div>
  ) : (
    <div className="card">{postBody}</div>
  );

  return content;
});

export default Post;
