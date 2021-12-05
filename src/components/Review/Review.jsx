import { useSelector } from 'react-redux';
import axios from 'axios';

function DisplayReview() {

//  useSelector to access states within reducers
const feelings = useSelector((store) => store.feelings);
const understanding = useSelector((store) => store.understanding);
const support = useSelector((store) => store.support);
const comments = useSelector((store) => store.comments);

// bundles states into one object
const feedback = {
    feelings: `${feelings}`,
    understanding: `${understanding}`,
    support: `${support}`,
    comments: `${comments}`
}
console.log({feedback});

// create function to submit feedback via axios post
const submitFeedback = () => {
    console.log('in axios POST', feedback);
    axios({
        method: 'POST',
        url: '/submitReview',
        data: feedback
    }).then((res) => {
        console.log('in POST feedback', res);
    }).catch((err) => {
        console.log('error in POST feedback', err);
    });
    // history.push('/');
}


    return (
        <div>
            <h1>Review Your Feedback</h1>
            <p>Feelings: {feelings}</p>
            <p>Understanding: {understanding}</p>
            <p>Support: {support}</p>
            <p>Comments: {comments}</p>
            <button onClick={submitFeedback}>SUBMIT</button>
        </div>
    )
} // end Display Review


export default DisplayReview;