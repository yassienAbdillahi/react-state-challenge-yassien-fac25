//challenge 1

//1.3
import dishes from "./data.js";

function ListDishes(props) {
    return (
        <ul className="grid">
          {dishes
          .filter((dish) => dish.price <= props.max) //2.3
          .filter((dish) => dish.category === props.categ || props.categ === "all")//3.3
          .map((dish) => (
            <li key={dish.id} className="card">
              <h3>{dish.name}</h3>
              {dish.description && <p>{dish.description}</p>}
              <div>£{dish.price.toFixed(2)}</div>
            </li>
          ))}
        </ul>
    )
}

export default ListDishes;