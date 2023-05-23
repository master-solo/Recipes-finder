import Search from "../components/Search";
import RecipesList from "../components/RecipesList";
import { getRecipes } from "../services/api";
import { useContext, useEffect, useState } from "react";
import Context from "../constants/Context";
import Loader from "../components/Loader";

const Recipes = () => {
  const { loading, setLoading } = useContext(Context)
  const [searchQuery, setSearchQuery] = useState("pizza");
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    getSearchResults();
    setLoading(true);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchQuery]);

  const getSearchResults = async () => {
    let result = await getRecipes(searchQuery);
    if (result && result.recipes) {
      setRecipes(result.recipes);
    }
    setLoading(false);
  };

  return (
    loading ? <Loader /> :
    <>
      <Search setSearchQuery={setSearchQuery} />
      <RecipesList recipes={recipes} searchQuery={searchQuery} />
    </>
  );
};

export default Recipes;
