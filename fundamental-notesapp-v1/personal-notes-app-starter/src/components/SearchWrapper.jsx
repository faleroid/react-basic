import { useSearchParams } from "react-router-dom";
import SearchPage from "../pages/SearchPage";

function SearchWrapper({ keywordChange }) {
    const [searchParams, setSearchParams] = useSearchParams();

    const keyword = searchParams.get('title') || '';

    function changeSearchParams(keyword) {
        if (keyword) {
            setSearchParams({ title: keyword });
        } else {
            setSearchParams({});
        }

        keywordChange(keyword);
    }

    return (
        <SearchPage keywordChange={changeSearchParams} defaultKeyword={keyword} />
    );
}

export default SearchWrapper;