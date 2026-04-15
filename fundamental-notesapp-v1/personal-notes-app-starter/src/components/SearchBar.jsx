function SearchBar({ keyword, keywordChange }) {
    return (
        <div className="search-bar">
            <input
                className="search-bar"
                type="text"
                placeholder="Cari berdasarkan nama"
                value={keyword}
                onChange={(event) => keywordChange(event.target.value)} />
        </div>
    )
}

export default SearchBar