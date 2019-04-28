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
        console.log(id + "Card was selected");
    }

    render() {
        return (
            <section id="sec-game" className="container">
                <div className="row">
                    <div className="col-12">
                    {this.state.characters.map(char => (
                        <Card 
                            id={char.id}
                            name={char.name}
                            image={char.image}
                        />
                    ))}
                    </div>
                </div>
            </section>
        );
    }
}

export default Game;