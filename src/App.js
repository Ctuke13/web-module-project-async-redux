import React from "react";
import "./App.css";

import axios from "axios";
import Games from "./components/Games";
import { options } from "./data";

// axios
//   .get(options.url, { headers: options.headers })
//   .then((res) => {
//     console.log(res.data);
//     const games = res.data;
//     console.log(games);
//     // dispatch(nextSuccess(teams[0]));
//   })
//   .catch((err) => dispatch(nextError(err.message)));

function App() {
  return (
    <div className="App">
      <Games />
    </div>
  );
}

export default App;
