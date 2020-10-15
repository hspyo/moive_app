import React from "react";
import styles from "./MovieCasts.module.css";

// 출연 배우 리스트
// MovieItem으로부터 {image, castName}을 전달받는다.
export default function MovieCasts({ image, castName }) {
  return (
    <div className={styles.cast}>
      <img
        className={styles.castImg}
        // image가 있을경우 그대로 사용하고, 없을 경우 대체이미지 사용.
        src={image ? image : require("../imgs/nophoto.jpg")}
        alt="출연 배우 사진"
      />
      <p className={styles.castName}> {castName} </p>
    </div>
  );
}
