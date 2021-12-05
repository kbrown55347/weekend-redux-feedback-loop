import {useHistory} from 'react-router-dom';
import { useDispatch } from 'react-redux';

function DisplayConfirmationPage() {

    const history = useHistory();
    const dispatch = useDispatch();

    const handleLeaveNewFeedbackClick = () => {
        // dispatch to reducers to empty state values
        dispatch({
            type: 'RESET_STATE',
            payload: ''
        })

        // history.push to feelings page
        history.push('/');
    }

    return (
        <div>
            <h1>Your feedback has been submitted. Thank you!</h1>
            <button onClick={handleLeaveNewFeedbackClick}>Leave New Feedback</button>
        </div>
    )
} // end displayConfirmationPage


export default DisplayConfirmationPage;