import {useHistory} from 'react-router-dom';

function DisplayConfirmationPage() {

    const history = useHistory();

    const handleLeaveNewFeedbackClick = () => {
        // dispatch to each state value to empty
        

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