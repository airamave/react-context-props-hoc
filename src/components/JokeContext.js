import React from "react";

export const JokeContext = React.createContext(null);

export const JokeProvider = props => {
  return (
    <JokeContext.Provider value={null}>
      {props.children}
    </JokeContext.Provider>
  );
};
