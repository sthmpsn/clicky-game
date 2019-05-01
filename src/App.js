import React from 'react';
import Wrapper from "./components/Wrapper/Wrapper";
import Navbar from "./components/Navbar/Navbar";
import Game from "./components/Game/Game";
import Footer from './components/Footer/Footer';

function App() {
      return (
          <Wrapper>
            <Navbar />
            <Game />
            <Footer />
          </Wrapper>
      )
  } 

export default App;
