import React from "react";
import styles from "./header.module.scss";
import Icons from "../icons";
import clsx from "clsx";

export default function Header({ textColor }) {
  return (
    <div id="header" className={clsx(styles["container"], styles[textColor])}>
      <div className={styles["header"]}>
        <div className={styles["header__logo"]}>
          {textColor === "white" ? (
            <img
              src="/assets/images/100-wh-logo.png"
              alt="100-wh-logo"
              srcSet="/assets/images/100-wh-logo.png 1x,
                /assets/images/100-wh-logo@2x.png 2x,
                /assets/images/100-wh-logo@3x.png 3x"
            />
          ) : (
            <img
              src="/assets/images/100-bk-logo.png"
              alt="100-bk-logo"
              srcSet="/assets/images/100-bk-logo.png 1x,
                /assets/images/100-bk-logo@2x.png 2x,
                /assets/images/100-bk-logo@3x.png 3x"
            />
          )}
        </div>
        <div>
          <button
            className={clsx(styles["header__menu-btn"], styles[textColor])}
          >
            <Icons.Menu className={styles["header__menu-btn__icon"]} />
          </button>
        </div>
      </div>

      <div className={styles["multi-language"]}>
        <span
          className={clsx(styles["multi-language__item"], styles["active"])}
        >
          KR
        </span>
        <span className={styles["multi-language__item"]}>EN</span>
      </div>
    </div>
  );
}
