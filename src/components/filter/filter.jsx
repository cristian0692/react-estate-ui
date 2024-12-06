import "./filter.scss";

function Filter() {
  return (
    <div className="filter">
      <h1>
        Search results fir <b>London</b>
      </h1>
      <div className="top">
        <div className="item">
          <label htmlFor="city">Location</label>
          <input type="text" name="city" id="city" placeholder="cityLocation" />
        </div>
      </div>
      <div className="bottom">
        <div className="item">
          <label htmlFor="type">Location</label>
          <select name="type" id="type">
            <option value="buy">Buy</option>
            <option value="rent">Rent</option>
          </select>
        </div>
        <div className="item">
          <label htmlFor="property">Location</label>
          <select name="property" id="property">
            <option value="apartment">Apartment</option>
            <option value="house">House</option>
            <option value="condo">Condo</option>
            <option value="land">Land</option>
          </select>{" "}
        </div>
        <div className="item">
          <label htmlFor="minPrice">Location</label>
          <input
            type="number"
            name="minPrice"
            id="minPrice"
            placeholder="any"
          />
        </div>
        <div className="item">
          <label htmlFor="city">Location</label>
          <input type="text" name="city" id="city" placeholder="cityLocation" />
        </div>
        <div className="item">
          <label htmlFor="city">Location</label>
          <input type="text" name="city" id="city" placeholder="cityLocation" />
        </div>
        <button>
          <img src="/search.png" alt="magnifying glass" />
        </button>
      </div>
    </div>
  );
}

export default Filter;
