import React, { useRef, useCallback } from "react";
import Post from "../Components/Post";
// import { getUpcomingMovies } from "./api/Axios";
import { getUpcomingMovies } from "../api/Axios";
import { useInfiniteQuery } from "react-query";

function LatestPage() {
  const {
    fetchNextPage, //function
    hasNextPage, //boolean
    isFetchingNextPage, //boolean
    data,
    status,
    error,
  } = useInfiniteQuery(
    "/movie/upcoming",
    ({ pageParam = 1 }) => getUpcomingMovies(pageParam),
    {
      getNextPageParam: (lastPage, allPages) => {
        console.log("last page is:", lastPage);
        // console.log("lastpage object in results should be an array", lastpage.results)
        console.log("lastpage results are:", lastPage.results);
        console.log("all page is:", allPages);

        return lastPage.results.length ? allPages.length + 1 : undefined;
      },
    }
  );

  console.log("hasNextPage is:", hasNextPage);
  console.log("isFetchingNextPage is", isFetchingNextPage);
  const intObserver = useRef();
  const lastMovieRef = useCallback(
    (movie) => {
      if (isFetchingNextPage) return;
      if (intObserver.current) intObserver.current.disconnect();

      intObserver.current = new IntersectionObserver((movies) => {
        if (movies[0].isIntersecting && hasNextPage) {
          console.log("we are near the last post!");
          fetchNextPage();
        }
      });

      if (movie) intObserver.current.observe(movie);
    },
    [isFetchingNextPage, fetchNextPage, hasNextPage]
  );

  if (status === "error")
    return <p className="center">Error: {error.message}</p>;

  console.log("the data is", data);
  const content = data?.pages.map((pg) => {
    return pg.results.map((post, i) => {
      if (pg.results.length === i + 1) {
        console.log("last element");
        return <Post ref={lastMovieRef} key={post.id} post={post} />;
      }
      return <Post key={post.id} post={post} />;
    });
  });

  return (
    <div>
      <div>LatestPage</div>
      <div className="main-container">
        {content}
        {isFetchingNextPage && <p>Loading More Posts...</p>}
      </div>
    </div>
  );
}

export default LatestPage;
