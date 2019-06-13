/** @jsx jsx */
import React from "react";
import { compose } from 'redux';
import { jsx } from "@emotion/core";
import Categories from "../Categories";
import styles from "./styles";
import notFunnyImage from "../../images/notFunny.png";
import funnyImage from "../../images/funny.jpg";
import withJokeHOC from "../withJokeHOC";

const Joke = ({ fetchNewJoke, joke, loading, name, category }) => {
  return (
    <div css={styles}>
      <div className="newJokeBtn">
        <button onClick={fetchNewJoke}>{`Fetch it you ${name}!`}</button>
      </div>
      <Categories category={category} />
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

export default compose(
  withJokeHOC('Flavio'),
)(Joke)
