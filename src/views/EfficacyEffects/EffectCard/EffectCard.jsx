import React from "react";
import styles from "./EffectCard.module.scss";
import clsx from "clsx";

export default function EffectCard(props) {
  const { imgSrc, imgAlt, imgSrcSet, title, description, hashtags } = props;
  return (
    <div className={styles["wrapper"]}>
      <div className={styles["wrapper__img"]}>
        <img src={imgSrc} alt={imgAlt} srcSet={imgSrcSet} />
      </div>
      <div className={styles["wrapper__text-wrap"]}>
        <div>
          <h3 className={styles["wrapper__title"]}>{title}</h3>
          <p className={styles["wrapper__desc"]}>{description}</p>
        </div>

        <div className={styles["wrapper__hashtags"]}>
          {hashtags.map((item) => (
            <span
              key={item.label}
              className={clsx(
                styles["wrapper__hashtags__item"],
                styles[item?.color]
              )}
            >
              #{item.label}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
