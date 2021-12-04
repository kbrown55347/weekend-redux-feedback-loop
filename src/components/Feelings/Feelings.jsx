import { useDispatch } from 'react-redux';
import React, { useState } from 'react';
import {useHistory} from 'react-router-dom';

function InputFeelings() {

    const history = useHistory();
    const dispatch = useDispatch();
    let [valueToAdd, setValueToAdd] = useState('');

    // create function to set input value to valueToAdd
    const handleInputValue = (event) => {
        // console.log(event.target.value);
        setValueToAdd(event.target.value);
    } // end handleInputValue

    // create function to dispatch input to feelings reducers
    const handleInputChange = () => {
        // console.log(valueToAdd);
        // if there is no input
        if (valueToAdd === '') {
            // alert user to add input value
            alert('Please add input to proceed.');
        } else {
        dispatch({
            type: 'ADD_FEELINGS',
            payload: valueToAdd
        })
        // send to next page
        history.push('/understanding')
        }
    }

    return (
        <div>
            <h1>How are you feeling today?</h1>
            <p>Feeling?</p>
            <input
                    onChange={handleInputValue}
                    type='number'
                    placeholder='1-5'
                    value={valueToAdd}
                />
            <button onClick={handleInputChange}>Next</button>
        </div>
    )

} // end InputFeelings



export default InputFeelings;