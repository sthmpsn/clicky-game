import React from "react";
import "./game.css";
import Card from "../Card/Card";
import Scoreboard from "../Scoreboard/Scoreboard";
import characters from "../../characters.json";

class Game extends React.Component {
    // Setting this.state.characters to the characters json array
    state = {
        characters,
        score: 0,
        topScore: 0,
        shakeClass: 'shake'
    };



    componentWillMount() {
        // On site load start new game
        this.newGame();
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
                    console.log(char.name + " matches: ID " + char.id);
                    if(char.clicked){
                        return this.gameOver();
                    }else{
                    char.clicked = true;
                    this.setState({score: this.state.score + 1});
                    console.log(char.name + " clicked value is set to " + char.clicked);
                    }
                }
            });
        }


    newGame = () => {
        // Reset the score to 0 for new game
        this.setState({score: 0});
        // Reset the shakeClass style to be empty
        this.setState({shakeClass: ''});
        this.shuffleCards();
        
        this.state.characters.forEach(char => {
            char.clicked = false;
            console.log(char.name + " click value set to " +char.clicked);
        })
    }

    gameOver = () => {
        // Game Over logic
        this.setState({shakeClass: 'shake'});

        
        if(this.state.topScore < this.state.score){
            this.setState({topScore: this.state.score});
        }
        setTimeout(
            function(){
                this.newGame();
            }
            .bind(this),
            1000
        );


    }


    render() {
        return (
            <section id="sec-game" className="container">
                <div className="row d-flex justify-content-center">
                    <Scoreboard 
                        score={this.state.score}
                        topScore={this.state.topScore}
                    />
                    {this.state.characters.map(char => (
                        <Card 
                            id={char.id}
                            key={char.id}
                            name={char.name}
                            image={char.image}
                            selectCard={this.selectCard}
                            clicked={char.clicked}
                            shakeClass={this.state.shakeClass}
                        />
                    ))}
                </div>
            </section>
        );
    }
}

export default Game;