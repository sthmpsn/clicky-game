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

    selectCard = (id) => {
        console.log(id + " Card was selected");
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
                        />
                    ))}
                </div>
            </section>
        );
    }
}

export default Game;