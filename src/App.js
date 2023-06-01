import "./App.css";
import NavBar from "./components/NavBar";
import Home from "./pages/Home";
import Recipes from "./pages/Recipes";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import RecipeDatails from "./components/RecipeDetails";
import Context from "./constants/Context";
import { useState } from "react";

function App() {
  const [loading, setLoading] = useState(true);

  return (
    <Context.Provider value={{ loading, setLoading }}>
      <Router>
        <NavBar />
        <Routes>
          <Route exact path="/Recipes-finder" element={<Home />} />
          <Route path="/Recipes-finder/recipes" element={<Recipes />} />
          <Route path="/Recipes-finder/recipes/:recipeId" element={<RecipeDatails />} />
        </Routes>
      </Router>
    </Context.Provider>
  );
}

export default App;
