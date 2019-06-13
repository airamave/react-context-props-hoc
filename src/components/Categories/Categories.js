/** @jsx jsx */
import { jsx } from "@emotion/core";
import classNames from "classnames";
import styles from "./styles";

function Categories({ setCategory, category }) {
  return (
    <div css={styles}>
      <ul>
        <li
          className={classNames({ selected: category === "dev" })}
          onClick={() => setCategory("dev")}
        >
          dev
        </li>
        <li
          className={classNames({ selected: category === "career" })}
          onClick={() => setCategory("career")}
        >
          career
        </li>
        <li
          className={classNames({ selected: category === "science" })}
          onClick={() => setCategory("science")}
        >
          science
        </li>
      </ul>
    </div>
  );
}

export default Categories;
