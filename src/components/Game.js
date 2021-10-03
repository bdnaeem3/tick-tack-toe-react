import { useDispatch, useSelector } from "react-redux";
import {
  playerAction,
  playerXChoiceAction,
  playerOChoiceAction,
} from "../redux/actions/gameActions";
// const win_combinations = [
//   [0, 1, 2],
//   [3, 4, 5],
//   [6, 7, 8],
//   [0, 3, 6],
//   [1, 4, 7],
//   [2, 5, 8],
//   [0, 4, 8],
//   [2, 4, 6],
// ];

const Game = () => {
  const dispatch = useDispatch();
  const { isPlayerX, playerXChoices, playerOChoices } = useSelector(state => state.game);

  const handler = i => {
    if (playerXChoices.includes(i) || playerOChoices.includes(i)) {
      return;
    }
    if (isPlayerX) {
      dispatch(playerXChoiceAction(i));
    } else {
      dispatch(playerOChoiceAction(i));
    }
    dispatch(playerAction(!isPlayerX));
  };

  console.log(isPlayerX, playerXChoices, playerOChoices);

  const boxex = () => {
    let elements = [];
    for (let i = 1; i < 10; i++) {
      elements.push(<li key={i} onClick={() => handler(i)}>
        {playerXChoices.includes(i) && "X"}
        {playerOChoices.includes(i) && "O"}
      </li>);
    }
    return elements;
  };

  return (
    <div className="wrapper">
      <ul>{boxex()}</ul>
      <h2>Turn for player {isPlayerX ? '"X"' : '"O"'}.</h2>
    </div>
  );
};

export default Game;
