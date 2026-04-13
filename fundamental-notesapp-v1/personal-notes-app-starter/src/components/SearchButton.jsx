function SearchButton({ searchKeyword, onSearchHandler }) {
    return (
        <div className="search-bar">
            <h2>Catatan Aktif</h2>
            <input
                type="text"
                placeholder="Cari catatan..."
                value={searchKeyword}
                onChange={(event) => onSearchHandler(event.target.value)}
                data-testid="note-search-input"
            />
        </div>
    );
}

export default SearchButton;