import { useContext, useEffect, useState } from "react";

import { GlobalContext, RecipeProps } from "../../context";
import RecipeCard from "../features/RecipeCard";

const Recipes = () => {
  const context = useContext(GlobalContext);
  const [filteredSearch, setFilteredSearch] = useState<string[]>([]);

  const {
    searchTerm,
    searchList,
    searchTermDebounced,
    setSearchTerm = () => {},
    searchRecipes,
    isLoading,
    error,
  } = context || {};

  useEffect(() => {
    if (searchTermDebounced) {
      const newSearchList = searchList!.filter(
        (item) =>
          item.toLowerCase().indexOf(searchTermDebounced.toLowerCase()) !== -1,
      );
      setFilteredSearch(newSearchList);
    }
  }, [searchTermDebounced, searchList]);

  function handleSelect(value: string) {
    setSearchTerm(value);
    setFilteredSearch([]);
  }

  return (
    <section aria-labelledby="Recipes">
      <div className="container">
        <div className="flex flex-col items-center">
          <h2 className="text-3xl font-bold">Latest Recipes</h2>

          <input
            autoFocus
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="mt-12 w-[50%] rounded-full bg-slate-500 px-8 py-4 text-white outline-none"
          />
          <ul className="mt-4 w-[48%] rounded-md bg-slate-400">
            {searchTermDebounced
              ? filteredSearch.map((item, idx) => (
                  <li
                    key={idx}
                    className="cursor-pointer px-6 py-3 text-sm text-white"
                    onClick={() => handleSelect(item)}
                  >
                    {item}
                  </li>
                ))
              : null}
          </ul>
        </div>

        <div className="mt-24 flex flex-wrap items-center justify-between gap-6 ">
          {error ? <h3>{error}</h3> : null}
          {isLoading ? (
            <div className="w-full py-10 text-center">
              <h3>Loading...</h3>
            </div>
          ) : null}
          {searchRecipes && searchRecipes.length ? (
            searchRecipes?.map((recipe: RecipeProps) => (
              <RecipeCard
                key={recipe.id}
                id={recipe.id}
                title={recipe.title}
                image_url={recipe.image_url}
                publisher={recipe.publisher}
              />
            ))
          ) : (
            <div className="w-full rounded-md bg-slate-200 py-10 text-center">
              <h3 className="font-bol text-xl">Search for your recipes!</h3>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Recipes;
