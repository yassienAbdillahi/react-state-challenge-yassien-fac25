//challenge 1

//1.2

import dishes from "./data.js";
// Get all unique categories from the array of dishes
const categories = [...new Set(dishes.map((dish) => dish.category))];

function FilterCategory (props) {
    return (
        <fieldset>
        <legend>Category</legend>
        <label htmlFor="all">
          <input type="radio" name="categories" id="all" value="all" checked={props.categ === "all"} onChange={//3.2
            (event) => {props.setCateg(event.target.value)}
          } />
          all
        </label>
        {categories.map((c) => (
          <label htmlFor={c} key={c}>
            <input type="radio" name="categories" id={c} value={c} checked={props.categ === c} onChange={//3.2
            (event) => {props.setCateg(event.target.value)}
          } />
            {c}
          </label>
        ))}
      </fieldset>
    )
}

export default FilterCategory