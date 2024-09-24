import React from "react";
import styles from "./header.module.scss";
import Icons from "../icons";
import clsx from "clsx";

export default function Header() {
  return (
    <div id="header" className={styles["container"]}>
      <div className={styles["header"]}>
        <div className={styles["header__logo"]}>
          <img
            src="/assets/images/100-bk-logo.png"
            alt="100-bk-logo"
            srcSet="/assets/images/100-bk-logo.png 1x,
          /assets/images/100-bk-logo@2x.png 2x,
          /assets/images/100-bk-logo@3x.png 3x"
          />
        </div>
        <div>
          <button className={styles["header__menu-btn"]}>
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
