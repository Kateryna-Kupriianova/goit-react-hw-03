import { useState } from "react";

const SearchBox = () => {
    const [values, setValues] = useState({
    name: ""
    
    });
    
    const handleContactSearch = (evt) => {
    setValues({
      ...values,
      name: evt.target.value,
    });
  };
  return (
      <div>
          <h2>Find contacts by name</h2>
          <input
              type="text"
              name="name"
              value={values.name}
              onChange={handleContactSearch}>
            </input>
      </div>
  )
}

export default SearchBox