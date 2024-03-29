import styles from "./search.module.css";

const Search = ({ onSearch, search }) => {
  const handleSearch = (event) => {
    const value = event.target.value;
    onSearch(value);
  };

  return (
    <input
      className={styles.search}
      type="text"
      placeholder="Поиск..."
      name="search"
      value={search}
      onChange={handleSearch}
    />
  );
};

export default Search;
