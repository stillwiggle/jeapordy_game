import React, { Component } from 'react';

class Jeopardy extends Component {

    state = {
        data: {},
        score: 0
    }

    //get a new random question from the API and add it to the data object in state
    getNewQuestion() {
        //use fetch to make an API call and get a random Jeopardy question (returns a promise)
        fetch(`https://jservice.io/api/random`)
            //on success of the fetch request, turn the response that came back into JSON
            .then((response) => response.json())
            //on success of turnig the response into JSON (data we can work with), lets add that data to state
            .then((data) => {

                //put the data in the console just so we can see it
                console.log("data from the api", data);

                //update state with the data from the API causing the page to re-render
                this.setState({
                    data: data[0] //grab the first question from the array returned
                });
            })
            //handle any errors/failures with getting data from the API
            .catch((error) => {
                console.log(error)
            });
    }

    //when the component mounts, get a the first question
    componentDidMount() {
        this.getNewQuestion();
    }

    

    //display the results on the screen
    render() {
        
        // Creates a new object, spreading from the Category object on the main data source
        const categoryValues = {...this.state.data.category}
        
        return (
        
            <div>
                <div>
                    
                    {/* Displaying the question to help you get started */}
                    Question: {this.state.data.question}<br></br>
                    {/* Display the category title */}
                    Categoy: {categoryValues.title}<br></br>
                    {/* Display the points total */}
                    Points: {this.state.data.value}<br></br>
                    {/* Temporarily show the answer to ensure the call is working */}
                    Answer: {this.state.data.answer}

                </div>

                <div>
                    Player Score: {this.state.score}
                </div>
                

            </div>

        );
    }
}

export default Jeopardy;
