import react, { useEffect } from "react";

const Categories = ({
  categories,
  movieFilter,
  activeGenre,
  setActiveGenre,
  setFiltered,
  movies,
}) => {
  //   console.log("categories in categories", categories);
  //   console.log("setFiltered---->", setFiltered);

  useEffect(() => {
    if (activeGenre === 1) {
      setFiltered(movies);
      return;
    }
    const filtered = movies.filter((movie) =>
      movie.genre_ids.includes(activeGenre)
    );
    setFiltered(filtered);
  }, [activeGenre]);

  return (
    <div className="btn-container">
      {categories.map((category) => {
        const { name, id } = category;
        return (
          <button
            type="button"
            className={activeGenre === id ? "btn active" : "btn"}
            key={id}
            // onClick={() => {
            //   movieFilter(id);
            // }}

            onClick={() => {
              setActiveGenre(id);
            }}
          >
            {name}
          </button>
        );
      })}
    </div>
  );
};

export default Categories;
