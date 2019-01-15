import React from 'react'

const FormSearch = (props) => {
  return (
    <div id="" className="mx-auto my-5" style={{ width: 15 + 'rem' }}>
          <form onSubmit={props.getDrinks} >
              <label htmlFor=" ">
                  <span id="" className=""> <h3>Search for Drinks</h3>  </span>
                  <input type="text" name="drinkName" id="" placeholder="" value={props.value} size="" onChange={props.handleChange} />
              </label>
              <button className="aclasss" > Search </button>
          </form>
        </div> 
  )
}

export default FormSearch
