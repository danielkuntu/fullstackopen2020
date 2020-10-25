import React from 'react'

const FilterForm = (props) => {
    return(
      <form>  
        <div>
          Filter shown with <input value={props.search} onChange={props.handleSearch}></input>
        </div>
      </form>
    )
}

export default FilterForm
