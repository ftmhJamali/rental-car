import "./App.css";
import { Provider } from "react-redux";
import { store } from "./features/store";
import Carlist from "./component/CarList";
import { Route, Routes } from "react-router-dom";
import CarDetail from "./component/CarDetail";
import useLocalStorage from "use-local-storage";
import Checkout from "./component/Checkout";
import Dashboard from "./component/Dashboard";
import { useState } from "react";
import moment from "moment";
function App() {
  const [pickValue, setPickValue] = useState(moment("2023-05-24"));
  const [dropValue, setDropValue] = useState(moment("2023-05-25"));
  const [isShow, setIsShow] = useLocalStorage(false);
  return (
    <Provider store={store}>
      <Routes>
        <Route
          path="/"
          element={<Carlist isShow={isShow} setIsShow={setIsShow} />}
        />
        <Route
          path="car/:id"
          element={<CarDetail isShow={isShow} setIsShow={setIsShow} />}
        />
        <Route
          path="/checkout"
          element={
            <Checkout
              pickValue={pickValue}
              setPickValue={setPickValue}
              dropValue={dropValue}
              setDropValue={setDropValue}
            />
          }
        />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </Provider>
  );
}

export default App;
