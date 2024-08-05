
import css from "./SearchBox.module.css"

const SearchBox = ({ filterValue, handleContactSearch }) => {
    
    
   
  return (
      <div className={css.searchBoxContainer}>
          <h2>Find contacts by name</h2>
          <input className={css.searchInput}
              type="text"
              name="name"
              value={filterValue}
              onChange={handleContactSearch}>
            </input>
      </div>
  )
}

export default SearchBox