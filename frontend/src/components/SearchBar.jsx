function SearchBar({
    search,
    setSearch,
    category,
    setCategory,
    categories,
  }) {
    return (
      <div className="search-container">
        <div className="search-box">
          <input
            type="text"
            placeholder="🔍 Search products by name..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
  
        <div className="filter-box">
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >
            {categories.map((item, index) => (
              <option key={index} value={item}>
                {item}
              </option>
            ))}
          </select>
        </div>
      </div>
    );
  }
  
  export default SearchBar;