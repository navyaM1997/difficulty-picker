import style from "./style.module.css";
import { DIFFICULTIES } from "./constants";
import { MenuListItem } from "../MenuListItem/MenuListItem";
export const MenuList = (props) => {
  return (
    <div className={style.container}>
      {DIFFICULTIES.map((difficulty) => {
        return (
          <MenuListItem
            key={difficulty}
            isSelected={props.difficulty === difficulty}
            onClick={props.onItemClick}
            difficulty={difficulty}
          />
        );
      })}
    </div>
  );
};
