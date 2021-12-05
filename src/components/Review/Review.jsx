import { useSelector } from 'react-redux';


function DisplayReview() {

//  useSelector to access states within reducers
const feelings = useSelector((store) => store.feelings);
const understanding = useSelector((store) => store.understanding);
const support = useSelector((store) => store.support);
const comments = useSelector((store) => store.comments);


    return (
        <div>
            <h1>Review Your Feedback</h1>
            <p>Feelings: {feelings}</p>
            <p>Understanding: {understanding}</p>
            <p>Support: {support}</p>
            <p>Comments: {comments}</p>
            <button>SUBMIT</button>
        </div>
    )
} // end Display Review


export default DisplayReview;