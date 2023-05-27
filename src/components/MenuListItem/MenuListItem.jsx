import style from "./style.module.css";

export const MenuListItem = (props) => {
  const onItemClick = () => {
    props.onClick(props.difficulty);
  };
  return (
    <div className={style.container} onClick={onItemClick}>
      set to:{props.difficulty}
    </div>
  );
};
