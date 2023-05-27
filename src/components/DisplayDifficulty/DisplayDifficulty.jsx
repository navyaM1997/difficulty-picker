import style from "./style.module.css";

export const DisplayDifficulty = (props) => {
  return (
    <div className={style.container}>
      {props.difficulty
        ? `Difficulty set to ${props.difficulty}`
        : "No difficulty set"}
    </div>
  );
};
