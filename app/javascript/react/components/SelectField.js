import React from 'react'

const SelectField = props => {
  return(
    <div>
      <label>
        <select name={props.name} value={props.value} onChange={props.handleChange}>
          <option></option>
          <option value="0">0</option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
        </select>
      </label>
    </div>
  )
}

export default SelectField;
