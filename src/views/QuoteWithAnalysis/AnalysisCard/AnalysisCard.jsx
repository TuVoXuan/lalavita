import React from "react";
import styles from "./AnalysisCard.module.scss";
import clsx from "clsx";

export default function AnalysisCard({
  iconSrc,
  iconSrcSet,
  iconAlt,
  title,
  description,
  bgColor,
}) {
  return (
    <div className={clsx(styles["wrapper"], styles[bgColor])}>
      <div className={styles["wrapper__icon"]}>
        <img src={iconSrc} alt={iconAlt} srcSet={iconSrcSet} />
      </div>
      <h3 className={styles["wrapper__title"]}>{title}</h3>
      <p className={clsx(styles["wrapper__desc"], styles[bgColor])}>
        {description}
      </p>
    </div>
  );
}
