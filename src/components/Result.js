import { memo } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { refreshAction } from "../redux/actions/gameActions";

const Result = props => {
  const dispatch = useDispatch();
  const { winner } = useSelector(state => state.game);
  const { isDraw } = props;

  const refreshHandler = () => {
    dispatch(refreshAction());
  };

  console.log('Working')

  return (
    <div className="result">
      {isDraw && <h3>Match Drawn!</h3>}
      {winner && (
        <h3>
          <span>Player {winner}</span> has won the match. :)
        </h3>
      )}
      <button onClick={refreshHandler}>Play Again</button>
    </div>
  );
};

export default memo(Result);
