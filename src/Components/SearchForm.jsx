import React from "react";

const SearchForm = ({ query, setQuery, error }) => {
  return (
    <form className="search-form" onSubmit={(e) => e.preventDefault}>
      <h1 style={{ fontSize: "2rem" }}>Search movies</h1>
      <input
        type="text"
        className="form-input"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      {error.show && <div className="error">{error.msg}</div>}
    </form>
  );
};

export default SearchForm;
