import React from "react";

const withJokeHOC = (name) => {
  return WrappedComponent => {
    const WithJoke = () => {
      const [joke, setJoke] = React.useState(null);
      const [loading, setLoading] = React.useState(false);

      const fetchNewJoke = async () => {
        setLoading(true);
        const response = await fetch("https://api.chucknorris.io/jokes/random");
        const joke = await response.json();
        setJoke(joke.value);
        setLoading(false);
      };
      return (
        <WrappedComponent
          name={name}
          fetchNewJoke={fetchNewJoke}
          joke={joke}
          loading={loading}
        />
      );
    };
    return WithJoke;
  };
};

export default withJokeHOC;
