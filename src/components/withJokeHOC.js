import React from "react";

const withJokeHOC = WrappedComponent => {
  const WithJoke = () => {
    return <WrappedComponent />;
  };
  return WithJoke;
};

export default withJokeHOC;
