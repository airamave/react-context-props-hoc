/** @jsx jsx */
import React from "react";
import { jsx } from "@emotion/core";
import styles from "./styles";
import Categories from "../Categories";
import notFunnyImage from "../../images/notFunny.png";
import funnyImage from "../../images/funny.jpg";
import queryString from "query-string";

const Joke = () => {
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
    <div css={styles}>
      <div className="newJokeBtn">
        <button onClick={fetchNewJoke}>Fetch it you coward!</button>
      </div>
      <Categories category={category} setCategory={setCategory} />
      <div className="joke">
        {loading ? (
          <span role="img" aria-label="waiting">
            ⏳
          </span>
        ) : (
          joke
        )}
      </div>
      <div className="image">
        <img alt="chuck" src={joke ? funnyImage : notFunnyImage} />
      </div>
    </div>
  );
};

export default Joke;
