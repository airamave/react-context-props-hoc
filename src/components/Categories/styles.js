import { css } from "@emotion/core";

export default css`
  ul {
    list-style: none;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    padding: 0;
    li {
      font-size: 2rem;
      text-transform: uppercase;
      cursor: pointer;
      border: 1px solid black;
      padding: 1rem 2rem;
      margin: 1rem;
      &.selected {
        background-color: #61dafb;
        transition: background-color 0.5s;
      }
    }
  }
`;
