

function InputUnderstanding() {


    return (
        <div>
            <h1>How are you feeling today?</h1>
            <p>Feeling?</p>
            <form>
                <input
                    // onChange={handleInputValue}
                    type='number'
                    placeholder='1-5'
                    // value={valueToAdd}
                />
            <button>Next</button>

            </form>
        </div>
    )

} // end InputUnderstanding

export default InputUnderstanding;