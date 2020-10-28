
import React from 'react'

const searchForm = (props) => {
    return(
      <form>
        <div>
          Find countries: <input value={props.search} onChange={props.handleSearch}></input>
        </div>
      </form>
    )
}

export default searchForm
