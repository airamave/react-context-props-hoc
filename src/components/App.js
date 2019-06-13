import React from "react";
import Joke from "./Joke";
import withJokeHOC from './withJokeHOC';

const AnotherJoke = ({ fetchNewJoke, joke}) => {
  return(
    <button onClick={() => fetchNewJoke()}>{!joke ? 'No Joke' : joke}</button>
  )
}
const ExtendedAnotherJoke = withJokeHOC('Flavio')(AnotherJoke);
function App() {
  return (
    <div>
      <Joke />
      <ExtendedAnotherJoke />
    </div>
  );
}

export default App;
