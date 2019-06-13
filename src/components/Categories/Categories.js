/** @jsx jsx */
import { jsx } from "@emotion/core";
import classNames from "classnames";
import styles from "./styles";
import { compose } from 'redux';
import CategoriesHOC from './CategoriesHOC';

const Item = ({ category, categories }) => {
  console.log(category);
  return (
    <li>
      d
    </li>
  );
};

const Categories = ({ categories }) => {
  return (
    <div css={styles}>
      <ul>
      </ul>
    </div>
  );
}

export default compose(
  CategoriesHOC(),
)(Categories);
