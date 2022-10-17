import dishes from "./data.js";
import FilterPrice from "./FilterPrice.jsx";
import FilterCategory from "./FilterCategory.jsx";
import ListDishes from "./ListDishes.jsx";
import { useState } from "react";

// Get all unique categories from the array of dishes
const categories = [...new Set(dishes.map((dish) => dish.category))];

function App() {

  const [maxPrice, setMaxPrice] = useState(9); //2.1

  const [cat, setCat] = useState("all"); //3.1


  return (
    <main>
      <section aria-label="filters">
        <div className="sticky">
          <h1>Burger Place</h1>
          <form>
            <h2>Filter dishes</h2>
            <FilterPrice max={maxPrice} setMax={setMaxPrice} />
            {/* 
            <fieldset>
              <legend>Price</legend>
              <label htmlFor="max-price">
                Max price
                <input
                  type="range"
                  id="max-price"
                  min="0.5"
                  max="9"
                  step="0.25"
                />
              </label>
            </fieldset>
            */}
            <FilterCategory categ={cat} setCateg={setCat} />
            {/*
            <fieldset>
              <legend>Category</legend>
              <label htmlFor="all">
                <input type="radio" name="categories" id="all" value="all" />
                all
              </label>
              {categories.map((c) => (
                <label htmlFor={c} key={c}>
                  <input type="radio" name="categories" id={c} value={c} />
                  {c}
                </label>
              ))}
            </fieldset>
            */}
          </form>
        </div>
      </section>
      <section aria-label="dishes">
        <ListDishes max={maxPrice} categ={cat} />
        {/* 
        <ul className="grid">
          {dishes.map((dish) => (
            <li key={dish.id} className="card">
              <h3>{dish.name}</h3>
              {dish.description && <p>{dish.description}</p>}
              <div>£{dish.price.toFixed(2)}</div>
            </li>
          ))}
        </ul>
        */}
      </section>
    </main>
  );
}

export default App;
