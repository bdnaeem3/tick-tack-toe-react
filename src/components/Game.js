import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  playerAction,
  playerXChoiceAction,
  playerOChoiceAction,
  winnerAction,
} from "../redux/actions/gameActions";
import Result from "./Result";
import { win_combinations } from "../static/win_combinations";

const Game = () => {
  const dispatch = useDispatch();
  const { isPlayerX, playerXChoices, playerOChoices, winner } = useSelector(
    state => state.game
  );
  const [isDraw, setIsDraw] = useState(false);

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

  const boxex = () => {
    let elements = [];
    for (let i = 1; i < 10; i++) {
      elements.push(
        <li key={i} onClick={() => handler(i)}>
          {playerXChoices.includes(i) && "X"}
          {playerOChoices.includes(i) && "O"}
        </li>
      );
    }
    return elements;
  };

  useEffect(() => {
    win_combinations.forEach(item => {
      const playerX = item.every(item => playerXChoices.includes(item));
      const playerO = item.every(item => playerOChoices.includes(item));
      if (playerX) {
        dispatch(winnerAction("X"));
      }
      if (playerO) {
        dispatch(winnerAction("O"));
      }
    });
  }, [dispatch, isPlayerX, playerXChoices, playerOChoices]);

  useEffect(() => {
    if (playerXChoices.length === 5 && !winner) {
      setIsDraw(true);
    } else {
      setIsDraw(false);
    }
  }, [winner, playerXChoices]);

  return (
    <div className="wrapper">
      <ul>{boxex()}</ul>
      <h2>Turn for player {isPlayerX ? '"X"' : '"O"'}.</h2>

      {(winner || isDraw) && <Result isDraw={isDraw} />}
    </div>
  );
};

export default Game;
