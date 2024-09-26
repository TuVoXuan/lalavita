import React from "react";
import styles from "./Contact.module.scss";
import Icons from "../../components/icons/index";

export default function Contact() {
  return (
    <div className={styles["wrapper"]}>
      <img
        className={styles["wrapper__img-bg"]}
        src="/assets/images/main-bg-07.png"
        alt="main-bg-07"
        srcSet="/assets/images/main-bg-07.png 1x,
        /assets/images/main-bg-07@2x.png 2x,
        /assets/images/main-bg-07@3x.png 3x"
      />

      <div className={styles["contact-wrap"]}>
        <div className={styles["address"]}>
          <p className={styles["label"]}>Adress</p>
          <p className={styles["content"]}>
            1234, Dosan-daero 1-gil, lalavita Building
          </p>
        </div>
        <div className={styles["partnership"]}>
          <p className={styles["label"]}>Partnership</p>
          <p className={styles["content"]}>+82 10 12347 890</p>
          <p className={styles["content"]}>lalavita@gmail.com</p>
        </div>
        <div>
          <p className={styles["label"]}>Social</p>
          <div className={styles["social-item"]}>
            <a href="/" className={styles["social-item__text"]}>
              Youtube
            </a>
            <Icons.Youtube className={styles["social-item__icon"]} />
          </div>
          <div className={styles["social-item"]}>
            <a href="/" className={styles["social-item__text"]}>
              Instagram
            </a>
            <Icons.Instagram className={styles["social-item__icon"]} />
          </div>
        </div>
        <p className={styles["copyright"]}>
          © 2022 Lalavita. All Rights Reserved
        </p>
      </div>
    </div>
  );
}
