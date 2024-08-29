import React from "react";
import Card from "./Card";
function Search({ query, handleSearch, products }) {
  return (
    <>
      {/* search Box */}
      <div className="searchBox">
        <input
          type="text"
          className="searchInput"
          placeholder="Search here..."
          value={query}
          onChange={handleSearch}
        />
      </div>

      {products.length === 0 && query.length > 0 ? (
        <p>No results found</p>
      ) : (
        <div className="container">
          {products.map((item) => (
            <Card item={item} key={item.id} />
          ))}
        </div>
      )}
    </>
  );
}

export default Search;
