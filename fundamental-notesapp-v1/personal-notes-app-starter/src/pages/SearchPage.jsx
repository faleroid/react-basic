import React from "react";
import SearchBar from "../components/SearchBar";

class SearchPage extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <section>
                <SearchBar keyword={this.props.defaultKeyword} keywordChange={this.props.keywordChange} />
            </section>
        )
    }
}

export default SearchPage;
