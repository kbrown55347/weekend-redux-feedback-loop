# Redux - Feedback Loop

## Description

*Duration: 2 day sprint*

I created a form that collects user feedback. The user is first prompted to provide feedback on how they are feeling, then on their understanding of the content, next on how well they feel supported and lastly they are able to leave a comment if they wish. All user feedback is displayed at the end for them to review before submitting. Once they submit it, they are moved to the next page where they can click to leave new feedback.

On the pages where the user enters their feedback, I captured these values and used reducers to store them. Then by importing the redux store, I accessed the values within the reducers to display the user's feedback on the review page. Lastly I used an axios POST route to store the user's feedback in the SQL database.

![Working Image](/public/FeedbackLoopDemo.gif)

## Prerequisites

- [Node.js](https://nodejs.org/en/)
- [PostgreSQL](https://www.postgresql.org/download/)

## Installation

1. To be able to store the user feedback, create a database named `prime_feedback`.

2. The query in the `data.sql` file is setup to create the necessary table to allow the application to run correctly. The project is built on [PostgreSQL](https://www.postgresql.org/download/), so you will need to have that installed. I recommend using [Postico](https://eggerapps.at/postico/) to run the query, as that was used to create it.

3. Open your editor of choice and run an `npm install` in your terminal to install the project's node dependencies.

4. Running the server code requires `nodemon`. If you don't already have `nodemon`, install it globally with `npm install nodemon --global`. 

5. Run `npm run server` in your terminal to start the server.

6. Open a new terminal tab and run `npm run client` to start the react client app.

## Usage

1. On the first page, input a number 1-5 based on how you are feeling. Click next to move to the next page.

2. Enter a number 1-5 reflecting your understanding of the content. Click next to continue.

3. Enter a number 1-5 based on how well you feel you are supported. Click next to continue.

4. On the next page, leave an optional comment. Click next to proceed.

5. Review your feedback then click submit.

6. Click the button to go back to the first page to enter in new information.

## Built With

- HTML
- JavaScript
- React
- Redux
- Node.js

## Acknowledgment

Thank you to Prime Digital Academy, my instructor Matthew Black, and my classmates who equipped and helped me to create this application.

## Support

If you have suggestions or issues, please email me at kbrown55347@gmail.com.