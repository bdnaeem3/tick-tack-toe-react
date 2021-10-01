import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { persistor, store } from "./redux/store";

import Game from "./components/Game";
import "./assets/scss/app.scss";

const App = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Game />
      </PersistGate>
    </Provider>
  );
};

export default App;
