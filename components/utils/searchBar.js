import { AlertCircle, ArrowRight, SearchIcon, XIcon } from "lucide-react";
import { useCallback, useEffect, useRef, useState } from "react";
import { TransitionLink } from "./TransitionLink";

const highlightSearchText = (text, searchText) => {
  if (!searchText) return text;
  const parts = text.split(new RegExp(`(${searchText})`, "gi"));
  return parts.map((part, index) =>
    part.toLowerCase() === searchText.toLowerCase() ? (
      <strong className="font-bold" key={index}>
        {part}
      </strong>
    ) : (
      part
    )
  );
};

const searchArticles = async (searchText) => {
  try {
    const response = await fetch(`/api/searchArticle?searchText=${searchText}`);
    const data = await response.json();
    return data.data;
  } catch (error) {
    console.error("Error searching articles:", error);
    return [];
  }
};

export const SearchBar = () => {
  const [open, setOpen] = useState(false);
  const [searchText, setSearchText] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const inputRef = useRef(null);

  const clearInput = () => {
    setSearchText("");
    setSearchResults([]);
    setOpen(false);
    inputRef.current.focus();
  };

  const handleSearch = useCallback(async () => {
    if (!searchText.trim()) {
      setOpen(false);
      return;
    }

    try {
      setOpen(true);
      const results = await searchArticles(searchText);
      setSearchResults(results);
    } catch (error) {
      console.error("Error searching articles:", error);
    }
  }, [searchText]);

  useEffect(() => {
    const delayDebounceFn = setTimeout(() => {
      if (searchText) {
        handleSearch();
      } else {
        clearInput();
      }
    }, 300);

    return () => clearTimeout(delayDebounceFn);
  }, [searchText, handleSearch]);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.metaKey && e.key === "s") {
        e.preventDefault();
        inputRef.current.focus();
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return (
    <div className="relative flex items-center gap-1.5 min-h-[48px]">
      <div className="relative w-full">
        <input
          ref={inputRef}
          type="text"
          className={`w-full py-2 pl-10 pr-14 text-base text-gray-700 bg-white border rounded-md focus:outline-none focus:ring-2 focus:ring-red`}
          placeholder="Search articles..."
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        />
        <div className="absolute z-10 cursor-pointer inset-y-0 left-0 flex items-center pl-3">
          {!searchText ? (
            <SearchIcon size={20} className="text-gray-400" />
          ) : (
            <button onClick={clearInput} className="focus:outline-none">
              <XIcon size={20} className="text-gray-400" />
            </button>
          )}
        </div>
      </div>
      {open && (
        <div className="absolute z-10 w-full mt-1 bg-white rounded-md shadow-lg top-full overflow-hidden">
          {searchResults.length === 0 ? (
            <div className="flex gap-2  items-center px-4 py-2 mb-2 text-sm text-red">
              <AlertCircle /> No results found
            </div>
          ) : (
            searchResults.slice(0, 3).map((article) => (
              <TransitionLink
                href={`/b/${article.attributes.slug}`}
                key={article.id}
              >
                <div className="group flex justify-between items-center px-4 py-2 cursor-pointer hover:bg-gray-100">
                  <span className="text-sm leading-tight">
                    {highlightSearchText(article.attributes.Title, searchText)}
                  </span>
                  <div className="transition-transform duration-300 transform group-hover:-rotate-45 group-hover:text-red">
                    <ArrowRight
                      size={20}
                      className="text-gray-400 group-hover:text-red"
                    />
                  </div>
                </div>
              </TransitionLink>
            ))
          )}
        </div>
      )}
      <div className="absolute inset-y-0 right-0 items-center hidden pr-3 md:flex">
        <span className="px-2 py-1 text-xs font-semibold text-gray-600 bg-gray-200 rounded-md">
          ⌘S
        </span>
      </div>
    </div>
  );
};
