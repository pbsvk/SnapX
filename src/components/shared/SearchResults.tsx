import { Models } from "appwrite"
import Loader from "./Loader";
import GridPostList from "./GridPostList";

type SearchResultsProps = {
  isSearchFetching: boolean;
  searchedPosts: Models.Document[];
};

const SearchResults = ({
  isSearchFetching,
  searchedPosts,
}: SearchResultsProps) => {
  if (isSearchFetching) return <Loader />;

  //@ts-ignore
  if (searchedPosts && searchedPosts.documents.length > 0) {
    //@ts-ignore
    return <GridPostList posts={searchedPosts.documents} />;
  }

  return (
    <p className="text-light-4 mt-10 text-center w-full">No results found!</p>
  );
};

export default SearchResults;