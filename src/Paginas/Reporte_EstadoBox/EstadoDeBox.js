import React from "react";
import styles from "./EstadoDeBox.module.css"; // Importamos el CSS Module

const EstadoBox = () => {
  const boxes = [
    { id: 1, status: "green" },
    { id: 2, status: "red" },
    { id: 3, status: "orange" },
    { id: 4, status: "green" },
    { id: 5, status: "orange" },
    { id: 6, status: "green" },
    { id: 7, status: "orange" },
    { id: 8, status: "green" },
    { id: 9, status: "green" },
    { id: 10, status: "orange" },
    { id: 11, status: "red" },
    { id: 12, status: "red" },
  ];

  return (
    <>
      <div className={`${styles.container} mt-4`}>
        <div className={styles.boxMap}>
          {boxes.map((box) => (
            <div key={box.id} className={`${styles.box} ${styles[box.status]}`}>
              Box {box.id}
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default EstadoBox;
