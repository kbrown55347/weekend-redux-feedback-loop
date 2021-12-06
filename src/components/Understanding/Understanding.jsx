import { useDispatch } from 'react-redux';
import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

function InputUnderstanding() {

    const history = useHistory();
    const dispatch = useDispatch();
    let [valueToAdd, setValueToAdd] = useState('');

    // create function to set input value to valueToAdd
    const handleInputValue = (event) => {
        // console.log(event.target.value);
        setValueToAdd(event.target.value);
    } // end handleInputValue

    // create function to dispatch input to understanding reducers
    const handleInputChange = () => {
        console.log(valueToAdd);
        // if there is no input
        if (valueToAdd < 1 || valueToAdd > 5 || valueToAdd === '') {
            // alert user to add input value
            alert('Please input value between 1-5 to proceed.');
        } else {
            dispatch({
                type: 'ADD_UNDERSTANDING',
                payload: valueToAdd
            })
            // send to next page
            history.push('/support');
        }
    }


    return (
        <div>
            <h1>How well are you understanding the content?</h1>
            <p>Understanding?</p>
            <input
                onChange={handleInputValue}
                type='number'
                placeholder='1-5'
                value={valueToAdd}
            />
            <button onClick={handleInputChange}>Next</button>
        </div>
    )

} // end InputUnderstanding

export default InputUnderstanding;