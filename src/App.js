import React, { useState, useEffect, createContext, useContext } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./styles.css";
import SubmitForm from "./components/SubmitForm";
import YourScores from "./components/YourScores";
import { ScoreContext } from "./contexts/scoreContext";

export default function App() {
  const [scores, setScores] = useState([
    {
      title: "dummy",
      score: 10,
      marvelous: 10,
      perfect: 10,
      great: 10,
      good: 10,
      ok: 10,
      miss: 0,
      ex: 90
    }
  ]);

  return (
    <ScoreContext.Provider value={{ scores, setScores }}>
      <Router>
        <Switch>
          <div className="App">
            <Route exact path="/" component={SubmitForm} />
            <Route path="/YourScores">
              <YourScores />
            </Route>
          </div>
        </Switch>
      </Router>
    </ScoreContext.Provider>
  );
}
