import React from "react";

const SearchContainer = () => {
  return (
    <section className="search">
      <input type="text" name="search_jobs" id="search_jobs" />
      <img src="assets/mobile/icon-filter.svg" alt="icon-filter" />
      <button type="button">
        <img src="assets/desktop/icon-search.svg" alt="icon-search" />
      </button>
    </section>
  );
};

export default SearchContainer;
