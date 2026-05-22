import Navbar from "./components/Navbar";
import {Routes, Route} from "react-router-dom";
import Home from "./pages/Home"
import Recipes from "./pages/Recipes"
import RecipesInfo from "./pages/RecipesInfo"
import { useEffect } from "react";

function App() {


  return (
    <>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/recipes" element={<Recipes/>}/>
        <Route path="/recipes-info" element={<RecipesInfo/>}/>
      </Routes> 
    </>
  )
}

export default App
