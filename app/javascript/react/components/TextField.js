import React from 'react'

const TextField = props => {
  return(
    <div>
      <label>
        {props.label}
        <input
          name={props.name}
          type='text'
          value={props.value}
          onChange={props.handleChange}
        />
      </label>
    </div>
  )
}

export default TextField;
