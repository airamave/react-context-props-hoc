import { css } from '@emotion/core';

export default css`
  .newJokeBtn {
    padding: 3rem 0;
    background-color: #282c34;
    display: flex;
    justify-content: center;
    button {
      cursor: pointer;
      width: 40rem;
      height: 10rem;
      background-color: #61dafb;
      border: none;
      font-size: 3rem;
      text-transform: uppercase;
      transition: background-color 0.2s ease-out;
      &:hover {
        background-color: #fff;
      }
    }
  }
  .joke {
    font-size: 5rem;
    text-align: center;
    margin-top: 10rem;
    margin-bottom: 4rem;
    padding: 0 20rem;
  }
  .image {
    display: flex;
    justify-content: center;
  }
  @media (max-width: 50rem) {
    .joke {
      font-size: 2rem;
      padding: 0 1rem;
    }
  }
`;
