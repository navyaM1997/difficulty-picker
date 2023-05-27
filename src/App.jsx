import { useState } from "react";
import { DisplayDifficulty } from "./components/DisplayDifficulty/DisplayDifficulty";
import { MenuList } from "./components/MenuList/MenuList";
import style from "./style.module.css";
function App() {
  const [currentDifficulty, setCurrentDifficulty] = useState("Low");

  const onMenuListItemClick = (difficulty) => {
    setCurrentDifficulty(difficulty);
  };
  return (
    <div>
      <h1 style={{ textAlign: "center" }}>Select your difficulty</h1>

      <div className={style.workspace}>
        <MenuList
          onItemClick={onMenuListItemClick}
          difficulty={currentDifficulty}
        />
        <DisplayDifficulty difficulty={currentDifficulty} />
      </div>
    </div>
  );
}
export default App;
