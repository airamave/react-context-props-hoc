import React from "react";
import queryString from "query-string";


const withJokeHOC = (name) => {
  return WrappedComponent => {
    const WithJoke = () => {
      const [joke, setJoke] = React.useState(null);
      const [loading, setLoading] = React.useState(false);
      const [category, setCategory] = React.useState(null);

      const fetchNewJoke = async () => {
        setLoading(true);
        const response = await fetch(
          `https://api.chucknorris.io/jokes/random?${
            category
              ? queryString.stringify({
                  category
                })
              : ""
          }`
        );
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
          category={category}
          setCategory={setCategory}
        />
      );
    };
    return WithJoke;
  };
};

export default withJokeHOC;
