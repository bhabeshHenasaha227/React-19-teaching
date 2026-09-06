import styles from "./Css.module.css";
import type { CSSProperties } from "react";

export default function Css() {
  const inlineStyle: CSSProperties = {
    color: "red",
    backgroundColor: "Black",
    height: "auto",
    width: "90%",
    textAlign: "center",
    padding: "16px",
  };
  return (
    <div>
      <h1 style={inlineStyle}>inline styling for CSS component </h1>

      <h1 className={styles.test}>module for CSS component </h1>
    </div>
  );
}
