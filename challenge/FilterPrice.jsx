//challenge 1

//1.1
function FilterPrice (props) {
    return (
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
                value={props.max} //2.2
                onChange={(event) => {props.setMax( event.target.value ) }} //2.2
            />
            </label>
        </fieldset>
    );
}

export default FilterPrice;