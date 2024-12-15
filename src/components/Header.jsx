import React from "react";
import styles from "./Header.module.scss";
import duckImage from "../assets/img/duck.png";
const Header = () => {
  return (
    <header className={styles.header}>
      <h1></h1>
      <a href="">
        <img src={duckImage} alt="Duck Logo" />
      </a>
      <nav>
        <ul>
          <li>
            <a href="">Home</a>
          </li>
          <li>
            <a href="">Projects</a>
          </li>
          <li>
            <a href="">About me</a>
          </li>
          <li>
            <a href="">Contact</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
