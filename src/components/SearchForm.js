import React from 'react';

const SearchForm = (props) => {
  return ( 
    <div>
      <p>
        Filter Employees by role
      </p>
      <form className="form">
        <input
          value={props.search}
          name="searchBar"
          onChange={props.handleInputChange}
          type="text"
          placeholder="Role"
        />
        <button type="submit" onClick={props.handleFormSubmit}>Submit</button>
      </form>
    </div>
   );
}
 
export default SearchForm ;