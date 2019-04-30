import React from "react";
import "./game.css";
import Card from "../Card/Card";
import characters from "../../characters.json";

class Game extends React.Component {
    // Setting this.state.characters to the characters json array
    state = {
        characters,
        score: 0,
        topScore: 0
    };


    componentWillMount() {
        // New Game
        this.shuffleCards();
    }

    shuffleCards = () => {
        this.state.characters.sort( () => Math.random() - 0.5);
        this.setState({
            characters: characters
        });
    }

    selectCard = (id) => {
        this.shuffleCards();
        console.log(id + " Card was selected");
            // check is the card's "clicked" property is set to true
            this.state.characters.forEach(char => {
                if (id === char.id){
                    console.log("They Match!");
                }else{
                    console.log("Not the id you're looking for");
                }
            });


            
                //if false
                    // set the click property of the id to true
                // else (true)
                    // game over();
        }



    gameOver = () => {
        // Game Over logic
    }


    render() {
        return (
            <section id="sec-game" className="container my-5">
                <div className="row">
                    {this.state.characters.map(char => (
                        <Card 
                            id={char.id}
                            key={char.id}
                            name={char.name}
                            image={char.image}
                            selectCard={this.selectCard}
                            clicked={char.clicked}
                        />
                    ))}
                </div>
            </section>
        );
    }
}

export default Game;