import { useDispatch } from 'react-redux';
import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

function InputComment() {

    const history = useHistory();
    const dispatch = useDispatch();
    let [valueToAdd, setValueToAdd] = useState('');

    // create function to set input value to valueToAdd
    const handleInputValue = (event) => {
        // console.log(event.target.value);
        setValueToAdd(event.target.value);
    } // end handleInputValue

    // create function to dispatch input to comments reducer
    const handleInputChange = () => {
        // console.log(valueToAdd);
        dispatch({
            type: 'ADD_COMMENT',
            payload: valueToAdd
        })
        // send to next page
        history.push('/review');
    }


    return (
        <div>
            <h1>Any comments you want to leave?</h1>
            <p>Comments</p>
            <input
                onChange={handleInputValue}
                type='text'
                placeholder='add comment'
                value={valueToAdd}
            />
            <button onClick={handleInputChange}>Next</button>
        </div>
    )

} // end InputComment


export default InputComment;