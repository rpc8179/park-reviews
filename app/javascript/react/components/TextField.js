import React from 'react'

const TextField = props => {
    return(
        <div>
            <label>{props.label}
                <input
                    name={props.name}
                    type='text'
                    value={props.content}
                />

            </label>
        </div>
    )
}

export default TextField;
