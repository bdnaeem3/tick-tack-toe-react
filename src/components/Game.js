import { useDispatch } from "react-redux";
import { popupAction } from "../redux/actions";

const Game = () => {
  const dispatch = useDispatch();

  const handler = () => {
    console.log("Clicked");
    dispatch(popupAction("Naeem"));
  };

  const boxes = () => {
    let elements = [];
    for (let i = 0; i < 9; i++) {
      elements.push(<li className={i}></li>);
    }
    return elements;
  };

  return (
    <div className="wrapper" onClick={handler}>
      <ul>{boxes()}</ul>
    </div>
  );
};

export default Game;
