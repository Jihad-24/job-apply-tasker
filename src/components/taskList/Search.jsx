/* eslint-disable react/prop-types */
import { SearchIcon } from "../../assets/icons/Search";

const SearchForm = ({ filter, setFilter }) => {
  return (
    <form>
      <div className="flex">
        <div className="relative overflow-hidden rounded-lg text-gray-50 md:min-w-[380px] lg:min-w-[440px]">
          <input
            type="search"
            id="search-dropdown"
            className="z-20 block w-full bg-gray-800 px-4 py-2 pr-10 focus:outline-none"
            placeholder="Search Title"
            value={filter.keyword}
            required
            onChange={(e) =>
              setFilter((previousValue) => ({
                ...previousValue,
                keyword: e.target.value,
              }))
            }
          />
          <button
            type="submit"
            className="absolute right-2 top-0 h-full rounded-e-lg text-white md:right-4"
          >
            <SearchIcon />
            <span className="sr-only">Search</span>
          </button>
        </div>
      </div>
    </form>
  );
};

export default SearchForm;
