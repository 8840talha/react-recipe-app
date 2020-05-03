import React from 'react';
import './Form.css'


const Form = (props) => {

    return (
        <form onSubmit={props.getRecepe} className="form">
            <input type="text" name="recepeName" />
            <button >Search</button>

        </form>
    )

}

export default Form;